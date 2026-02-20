"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, RefreshCw } from "lucide-react";

interface GoldRateData {
    price_24k_per_gram: number;
    price_22k_per_gram: number;
    price_24k_per_10g: number;
    price_22k_per_10g: number;
    change: number;
    change_percent: number;
    last_updated: string;
}

function AnimatedCounter({ value }: { value: number }) {
    const [display, setDisplay] = useState(0);
    const prevRef = useRef(0);

    useEffect(() => {
        const start = prevRef.current;
        const end = value;
        const duration = 800;
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(animate);
        };

        animate();
        prevRef.current = end;
    }, [value]);

    return <span>₹{display.toLocaleString("en-IN")}</span>;
}

export default function GoldRateDisplay() {
    const [data, setData] = useState<GoldRateData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRate = async () => {
            try {
                const res = await fetch("/api/gold-rate");
                const json = await res.json();
                if (json.success) setData(json.data);
            } catch { /* fallback */ }
            setLoading(false);
        };
        fetchRate();
        const interval = setInterval(fetchRate, 60000);
        return () => clearInterval(interval);
    }, []);

    const rates = [
        { label: "24K GOLD", sublabel: "", value: data?.price_24k_per_gram ?? 7250, unit: "per gram", change: data?.change_percent ?? 0 },
        { label: "22K GOLD", sublabel: "916 Hallmark", value: data?.price_22k_per_gram ?? 6646, unit: "per gram", change: data?.change_percent ?? 0 },
        { label: "24K GOLD", sublabel: "10 Grams", value: data?.price_24k_per_10g ?? 72500, unit: "per 10 grams", change: data?.change_percent ?? 0 },
        { label: "22K GOLD", sublabel: "10 Grams", value: data?.price_22k_per_10g ?? 66460, unit: "per 10 grams", change: data?.change_percent ?? 0 },
    ];

    return (
        <section id="gold-rate" className="relative py-20 bg-light-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3 font-serif">
                        Today&apos;s <span className="text-brand-red">Gold Rate</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        Real-time market rates updated every 60 seconds. Get the most competitive price for your gold.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {rates.map((rate, i) => (
                        <motion.div
                            key={`${rate.label}-${rate.sublabel}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-bold text-brand-red tracking-wider uppercase">{rate.label}</span>
                                <span className="text-xs text-text-muted">{rate.sublabel}</span>
                            </div>

                            <div className="text-3xl font-bold text-text-dark mb-1">
                                <AnimatedCounter value={rate.value} />
                            </div>
                            <div className="text-xs text-text-muted">{rate.unit}</div>

                            <div className="mt-3 flex items-center gap-1">
                                {rate.change > 0 ? (
                                    <TrendingUp className="w-3 h-3 text-green-600" />
                                ) : rate.change < 0 ? (
                                    <TrendingDown className="w-3 h-3 text-red-500" />
                                ) : (
                                    <Minus className="w-3 h-3 text-gray-400" />
                                )}
                                <span className={`text-xs ${rate.change > 0 ? "text-green-600" : rate.change < 0 ? "text-red-500" : "text-gray-400"}`}>
                                    {rate.change > 0 ? "+" : ""}{rate.change.toFixed(1)}%
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {data?.last_updated && (
                    <div className="flex items-center justify-center gap-2 mt-6 text-xs text-text-muted">
                        <RefreshCw className="w-3 h-3" />
                        Last updated: {new Date(data.last_updated).toLocaleTimeString("en-IN")}
                    </div>
                )}
            </div>
        </section>
    );
}
