"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calculator, Weight, Sparkles } from "lucide-react";
import { PURITY_FACTORS } from "@/lib/constants";

export default function GoldCalculator() {
    const [weight, setWeight] = useState(10);
    const [purity, setPurity] = useState("22K");
    const [liveRate, setLiveRate] = useState(7250);
    const [displayValue, setDisplayValue] = useState(0);
    const prevValue = useRef(0);

    useEffect(() => {
        const fetchRate = async () => {
            try {
                const res = await fetch("/api/gold-rate");
                const data = await res.json();
                if (data.success) setLiveRate(data.data.price_24k_per_gram);
            } catch { /* fallback */ }
        };
        fetchRate();
    }, []);

    const factor = PURITY_FACTORS.find((p) => p.label === purity)?.factor ?? 0.9167;
    const estimatedValue = Math.round(liveRate * weight * factor);

    useEffect(() => {
        const start = prevValue.current;
        const end = estimatedValue;
        const duration = 600;
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(animate);
        };
        animate();
        prevValue.current = end;
    }, [estimatedValue]);

    return (
        <section id="calculator" className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Controls */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center">
                                <Calculator className="w-5 h-5 text-brand-red" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark font-serif">
                                Gold Value <span className="text-brand-red">Calculator</span>
                            </h2>
                        </div>
                        <p className="text-text-muted mb-8">
                            Get an instant estimate of your gold&apos;s value based on current market rates.
                        </p>

                        {/* Weight Slider */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 text-sm text-text-dark font-medium mb-3">
                                <Weight className="w-4 h-4 text-brand-red" />
                                Gold Weight (grams)
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min={1}
                                    max={500}
                                    value={weight}
                                    onChange={(e) => setWeight(Number(e.target.value))}
                                    className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-brand-red"
                                />
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(Math.max(1, Math.min(500, Number(e.target.value))))}
                                        className="w-20 px-3 py-2 bg-light-bg border border-gray-200 rounded-lg text-center text-text-dark font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                                    />
                                    <span className="text-sm text-text-muted">g</span>
                                </div>
                            </div>
                        </div>

                        {/* Purity Selection */}
                        <div>
                            <div className="flex items-center gap-2 text-sm text-text-dark font-medium mb-3">
                                <Sparkles className="w-4 h-4 text-brand-red" />
                                Gold Purity
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {PURITY_FACTORS.map((p) => (
                                    <button
                                        key={p.label}
                                        onClick={() => setPurity(p.label)}
                                        className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${purity === p.label
                                            ? "bg-brand-red text-white shadow-lg"
                                            : "bg-light-bg text-text-dark border border-gray-200 hover:border-brand-red/30"
                                            }`}
                                    >
                                        <div>{p.label}</div>
                                        <div className="text-xs opacity-70 mt-0.5">{(p.factor * 100).toFixed(2)}% Pure</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Result Display */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-light-bg rounded-3xl p-8 border border-gray-100">
                            <div className="flex items-center gap-2 mb-6 justify-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-brand-teal font-medium px-3 py-1 bg-mint-bg rounded-full">
                                    Based on Live Rate
                                </span>
                            </div>

                            <div className="text-center mb-8">
                                <div className="text-sm text-text-muted mb-2">Estimated Value</div>
                                <div className="text-5xl sm:text-6xl font-bold text-brand-red">
                                    ₹{displayValue.toLocaleString("en-IN")}
                                </div>
                                <div className="text-sm text-text-muted mt-2">
                                    {weight}g × {purity} @ ₹{liveRate.toLocaleString("en-IN")}/g
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-xs text-text-muted">Rate Used</div>
                                    <div className="text-lg font-bold text-brand-red">
                                        ₹{Math.round(liveRate * factor).toLocaleString("en-IN")}
                                    </div>
                                    <div className="text-xs text-text-muted">{purity} per gram</div>
                                </div>
                                <div className="bg-white rounded-xl p-4 text-center border border-gray-100">
                                    <div className="text-xs text-text-muted">Weight</div>
                                    <div className="text-lg font-bold text-text-dark">{weight}g</div>
                                    <div className="text-xs text-text-muted">{(weight / 10).toFixed(1)} tola</div>
                                </div>
                            </div>

                            <a
                                href="#contact"
                                className="block w-full text-center py-4 bg-brand-red text-white font-bold rounded-xl text-sm hover:bg-brand-red-dark transition-all duration-300 shadow-lg"
                            >
                                Book Free Valuation Now
                            </a>

                            <p className="text-[10px] text-text-muted text-center mt-4 leading-relaxed">
                                * Final value may vary after purity verification at our branch.
                                Actual payment based on certified XRF testing results.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
