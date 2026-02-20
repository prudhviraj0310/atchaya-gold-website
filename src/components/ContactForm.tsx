"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, User, Phone, MapPin, Weight, MessageSquare } from "lucide-react";
import { BRANCHES, COMPANY } from "@/lib/constants";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Content & Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6 font-serif">
                            Get Your <span className="text-brand-red">Free Quote</span>
                        </h2>
                        <p className="text-text-muted mb-8 max-w-md leading-relaxed">
                            Fill in your details and we&apos;ll get back to you within 15 minutes with your
                            gold valuation. No obligation, 100% free.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-light-bg p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-brand-red" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted mb-1">Call Us</div>
                                    <div className="text-lg font-bold text-text-dark">{COMPANY.phone}</div>
                                </div>
                            </div>
                            <div className="bg-light-bg p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                                <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-5 h-5 text-brand-red" />
                                </div>
                                <div>
                                    <div className="text-xs text-text-muted mb-1">Email Us</div>
                                    <div className="text-lg font-bold text-text-dark">contact@atchayagoldcompany.com</div>
                                </div>
                            </div>
                        </div>

                        {/* Actress Image Bottom Left */}
                        <div className="mt-12 relative h-64 w-full hidden sm:block">
                            <img
                                src="/images/actress-contact.png"
                                alt="Wait for us at your doorstep"
                                className="absolute bottom-0 left-0 h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-light-bg rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50"
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-1.5 flex items-center gap-2">
                                    <User className="w-4 h-4 text-brand-red" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-text-dark placeholder:text-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-1.5 flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-brand-red" />
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    pattern="[0-9]{10}"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-text-dark placeholder:text-gray-400"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="branch" className="block text-sm font-medium text-text-dark mb-1.5 flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-brand-red" />
                                        Nearest Branch
                                    </label>
                                    <select
                                        name="branch"
                                        id="branch"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-text-dark appearance-none"
                                    >
                                        <option value="">Select Branch</option>
                                        {BRANCHES.map((b) => (
                                            <option key={b.slug} value={b.city}>{b.city}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium text-text-dark mb-1.5 flex items-center gap-2">
                                        <Weight className="w-4 h-4 text-brand-red" />
                                        Gold Weight (approx.)
                                    </label>
                                    <input
                                        type="text"
                                        name="weight"
                                        id="weight"
                                        placeholder="e.g., 10 grams"
                                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-text-dark placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-1.5 flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-brand-red" />
                                    Message (Optional)
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={3}
                                    placeholder="Any additional details..."
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-text-dark placeholder:text-gray-400 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting" || status === "success"}
                                className="w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-brand-red-dark transition-all duration-300 shadow-lg hover:shadow-brand-red/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? (
                                    <>Processing...</>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle className="w-5 h-5" />
                                        Request Sent Successfully
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Get Free Quote
                                    </>
                                )}
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-sm flex items-center gap-2 justify-center mt-2">
                                    <AlertCircle className="w-4 h-4" />
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
