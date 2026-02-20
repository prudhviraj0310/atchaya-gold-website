"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#E8EEF8] via-[#EFF2F8] to-white">
            {/* Decorative Leaf SVGs (like the live site) */}
            <div className="absolute top-10 right-10 w-40 h-40 opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 20C60 30 40 50 30 80C50 70 70 50 80 20Z" stroke="#076951" strokeWidth="1" fill="none" />
                    <path d="M60 10C50 30 30 50 20 70C40 60 60 40 60 10Z" stroke="#076951" strokeWidth="1" fill="none" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-5 w-32 h-32 opacity-10 pointer-events-none rotate-180">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 20C60 30 40 50 30 80C50 70 70 50 80 20Z" stroke="#076951" strokeWidth="1" fill="none" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Mobile: Actress Image First */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:hidden flex justify-center"
                    >
                        <div className="relative w-72 h-80 rounded-3xl overflow-hidden bg-mint-bg">
                            <img
                                src="/images/actress-hero.png"
                                alt="Trusted Gold Buying - Atchaya Gold Company"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </motion.div>

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif">
                            <span className="text-brand-red">Sell Your Gold</span>
                            <br />
                            <span className="text-brand-red">with Confidence</span>
                            <br />
                            <span className="text-brand-red">& Clarity!</span>
                        </h1>

                        <p className="text-lg text-text-muted mb-8 max-w-lg leading-relaxed">
                            {COMPANY.subtext} Get the best market rates with our certified testing
                            and instant payment — at any of our 8 branches across Tamil Nadu.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="group flex items-center gap-2 px-7 py-3.5 bg-brand-red text-white font-bold rounded-lg text-sm hover:bg-brand-red-dark hover:shadow-xl transition-all duration-300"
                            >
                                <Calendar className="w-4 h-4" />
                                Book Free Valuation
                            </a>
                            <a
                                href={`tel:${COMPANY.phone}`}
                                className="flex items-center gap-2 px-7 py-3.5 bg-white border-2 border-brand-red text-brand-red font-semibold rounded-lg text-sm hover:bg-red-50 transition-all duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>
                            <a
                                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I would like to sell my gold. Please provide details.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-7 py-3.5 bg-green-600 text-white font-semibold rounded-lg text-sm hover:bg-green-700 transition-all duration-300"
                            >
                                <MessageCircle className="w-4 h-4" />
                                WhatsApp Now
                            </a>
                        </div>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex gap-8 mt-12 pt-8 border-t border-gray-200"
                        >
                            {[
                                { number: "8+", label: "Branches" },
                                { number: "10K+", label: "Happy Customers" },
                                { number: "100%", label: "Transparent" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold text-brand-red">{stat.number}</div>
                                    <div className="text-xs text-text-muted mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Actress Image — Desktop Only (mint green container like live site) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:flex relative justify-center items-center"
                    >
                        <div className="relative">
                            {/* Mint green container like the live site */}
                            <div className="relative rounded-[40px] overflow-hidden bg-mint-bg p-4">
                                {/* Decorative Leaves */}
                                <div className="absolute top-4 right-4 w-24 h-24 opacity-20 pointer-events-none">
                                    <svg viewBox="0 0 100 100" fill="none">
                                        <path d="M80 20C60 30 40 50 30 80C50 70 70 50 80 20Z" stroke="#8CB5A8" strokeWidth="1.5" fill="none" />
                                        <path d="M60 10C50 30 30 50 20 70C40 60 60 40 60 10Z" stroke="#8CB5A8" strokeWidth="1.5" fill="none" />
                                    </svg>
                                </div>
                                <div className="absolute bottom-8 left-4 w-20 h-20 opacity-15 pointer-events-none rotate-45">
                                    <svg viewBox="0 0 100 100" fill="none">
                                        <path d="M80 20C60 30 40 50 30 80C50 70 70 50 80 20Z" stroke="#8CB5A8" strokeWidth="1.5" fill="none" />
                                    </svg>
                                </div>

                                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[580px]">
                                    <img
                                        src="/images/actress-hero.png"
                                        alt="Trusted Gold Buying - Atchaya Gold Company"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
