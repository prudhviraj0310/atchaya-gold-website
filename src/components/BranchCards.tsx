"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";
import { BRANCHES, COMPANY } from "@/lib/constants";
import Link from "next/link";

export default function BranchCards() {
    return (
        <section id="branches" className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3 font-serif">
                        Our <span className="text-brand-red">Branches</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        Visit any of our 8 branches across Tamil Nadu for instant gold valuation and payment.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {BRANCHES.map((branch, i) => (
                        <motion.div
                            key={branch.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-light-bg rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className="w-5 h-5 text-brand-red" />
                                <h3 className="text-lg font-bold text-text-dark">{branch.city}</h3>
                            </div>
                            <p className="text-sm text-text-muted mb-4">{branch.address}</p>

                            <div className="flex gap-2 mb-3">
                                <a
                                    href={`tel:${branch.phone || COMPANY.phone}`}
                                    className="flex items-center gap-1.5 px-3 py-2 bg-brand-red text-white text-xs font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
                                >
                                    <Phone className="w-3 h-3" />
                                    Call
                                </a>
                                <a
                                    href={branch.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 text-text-muted text-xs font-semibold rounded-lg hover:border-brand-red/30 hover:text-brand-red transition-all"
                                >
                                    <Navigation className="w-3 h-3" />
                                    Directions
                                </a>
                            </div>

                            <Link
                                href={`/branches/${branch.slug}`}
                                className="text-xs text-brand-red font-medium hover:underline"
                            >
                                View Branch Details →
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
