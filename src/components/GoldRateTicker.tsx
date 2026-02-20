"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface GoldRate {
    price_24k_per_gram: number;
    change: number;
    change_percent: number;
}

export default function GoldRateTicker() {
    const [rate, setRate] = useState<GoldRate | null>(null);
    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchRate = async () => {
            try {
                const res = await fetch("/api/gold-rate");
                const data = await res.json();
                if (data.success) setRate(data.data);
            } catch { /* fallback shows static */ }
        };
        fetchRate();
        const interval = setInterval(fetchRate, 60000);
        return () => clearInterval(interval);
    }, []);

    const price = rate?.price_24k_per_gram ?? 7250;
    const change = rate?.change ?? 0;
    const TrendIcon = change > 0 ? TrendingUp : change < 0 ? TrendingDown : Minus;
    const trendColor = change > 0 ? "text-green-600" : change < 0 ? "text-red-600" : "text-gray-500";

    const tickerContent = (
        <div className="flex items-center gap-8 px-4 whitespace-nowrap">
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-brand-red">LIVE GOLD RATE</span>
            </span>
            <span className="font-bold text-text-dark">24K: ₹{price.toLocaleString("en-IN")}/g</span>
            <span className={`flex items-center gap-1 ${trendColor}`}>
                <TrendIcon className="w-3 h-3" />
                <span className="text-xs">₹{Math.abs(change).toFixed(2)}</span>
            </span>
        </div>
    );

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-white border-b border-gray-200 py-1.5 overflow-hidden flex items-center">
            <div ref={tickerRef} className="flex animate-ticker-scroll" style={{ width: "max-content" }}>
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i}>{tickerContent}</div>
                ))}
            </div>
        </div>
    );
}
