"use client";

import { motion } from "framer-motion";
import { Package, FlaskConical, TrendingUp, Banknote } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
    Package, FlaskConical, TrendingUp, Banknote,
};

export default function ProcessFlow() {
    return (
        <section id="process" className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3 font-serif">
                        How It <span className="text-brand-red">Works</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        A simple, transparent 4-step process to sell your gold for the best value.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((step, i) => {
                            const Icon = ICON_MAP[step.icon] || Package;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="relative text-center"
                                >
                                    {/* Step Number */}
                                    <div className="relative z-10 w-16 h-16 mx-auto mb-4 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-xs text-brand-red font-bold mb-1 uppercase tracking-wider">
                                        Step {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-text-dark mb-2">{step.title}</h3>
                                    <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
