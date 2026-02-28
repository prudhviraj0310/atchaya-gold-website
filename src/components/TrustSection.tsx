"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Award, Zap, Eye, ShieldCheck } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
    Shield, Lock, Award, Zap, Eye, ShieldCheck,
};

export default function TrustSection() {
    return (
        <section className="relative py-20 bg-light-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3 font-serif">
                        Why <span className="text-brand-red">Trust Us</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        Your trust is our foundation. Here&apos;s why thousands choose Atchaya Gold Company.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {TRUST_BADGES.map((badge, i) => {
                        const Icon = ICON_MAP[badge.icon] || Shield;
                        return (
                            <div
                                key={badge.title}
                                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
                                style={{ animationDelay: `${i * 100}ms`, animationFillMode: "both" }}
                            >
                                <div className="w-12 h-12 bg-brand-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                    <Icon className="w-6 h-6 text-brand-red group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-text-dark mb-2">{badge.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{badge.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
