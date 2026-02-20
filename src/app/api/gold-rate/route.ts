import { NextResponse } from "next/server";

interface GoldApiResponse {
    price: number;
    ch: number;
    chp: number;
    timestamp: number;
}

interface CachedRate {
    price_24k_per_gram: number;
    price_22k_per_gram: number;
    price_18k_per_gram: number;
    price_24k_per_10g: number;
    price_22k_per_10g: number;
    price_18k_per_10g: number;
    change: number;
    change_percent: number;
    trend: "up" | "down" | "stable";
    last_updated: string;
    source: "live" | "fallback";
}

let cache: { data: CachedRate; timestamp: number } | null = null;
const CACHE_TTL = 60 * 1000; // 60 seconds

// Rate limiting
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 30;
const RATE_WINDOW = 60 * 1000;

// Fallback rates (updated periodically)
const FALLBACK_RATE: CachedRate = {
    price_24k_per_gram: 7250,
    price_22k_per_gram: 6646,
    price_18k_per_gram: 5438,
    price_24k_per_10g: 72500,
    price_22k_per_10g: 66460,
    price_18k_per_10g: 54380,
    change: 0,
    change_percent: 0,
    trend: "stable",
    last_updated: new Date().toISOString(),
    source: "fallback",
};

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const record = requestCounts.get(ip);

    if (!record || now > record.resetTime) {
        requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return true;
    }

    if (record.count >= RATE_LIMIT) {
        return false;
    }

    record.count++;
    return true;
}

export async function GET(request: Request) {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
        );
    }

    // Check cache
    if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
        return NextResponse.json(cache.data);
    }

    const apiKey = process.env.GOLD_API_KEY;

    if (!apiKey) {
        // Return fallback if no API key
        const fallback = { ...FALLBACK_RATE, last_updated: new Date().toISOString() };
        return NextResponse.json(fallback);
    }

    try {
        const response = await fetch("https://www.goldapi.io/api/XAU/INR", {
            headers: {
                "x-access-token": apiKey,
                "Content-Type": "application/json",
            },
            next: { revalidate: 60 },
        });

        if (!response.ok) {
            throw new Error(`GoldAPI returned ${response.status}`);
        }

        const data: GoldApiResponse = await response.json();

        // Convert troy ounce to grams (1 troy oz = 31.1035 grams)
        const pricePerGram24K = Math.round(data.price / 31.1035);
        const pricePerGram22K = Math.round(pricePerGram24K * 0.9167);
        const pricePerGram18K = Math.round(pricePerGram24K * 0.75);

        const result: CachedRate = {
            price_24k_per_gram: pricePerGram24K,
            price_22k_per_gram: pricePerGram22K,
            price_18k_per_gram: pricePerGram18K,
            price_24k_per_10g: pricePerGram24K * 10,
            price_22k_per_10g: pricePerGram22K * 10,
            price_18k_per_10g: pricePerGram18K * 10,
            change: Math.round(data.ch * 100) / 100,
            change_percent: Math.round(data.chp * 100) / 100,
            trend: data.ch > 0 ? "up" : data.ch < 0 ? "down" : "stable",
            last_updated: new Date(data.timestamp * 1000).toISOString(),
            source: "live",
        };

        // Update cache
        cache = { data: result, timestamp: Date.now() };

        return NextResponse.json(result);
    } catch (error) {
        console.error("GoldAPI fetch error:", error);

        // Return cached data if available
        if (cache) {
            return NextResponse.json({ ...cache.data, source: "fallback" as const });
        }

        // Return static fallback
        return NextResponse.json({
            ...FALLBACK_RATE,
            last_updated: new Date().toISOString(),
        });
    }
}
