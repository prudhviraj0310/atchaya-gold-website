"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "How It Works", href: "#process" },
    { label: "Branches", href: "#branches" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-xl shadow-lg"
                : "bg-white/80 backdrop-blur-sm"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo — rectangular, matching live site style */}
                    <Link href="/" className="flex items-center shrink-0">
                        <div className="relative h-14 w-auto">
                            <Image
                                src="/images/logo.png"
                                alt="Atchaya Gold Company"
                                width={200}
                                height={56}
                                className="h-14 w-auto object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-text-dark hover:text-brand-red transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href={`tel:${COMPANY.phone}`}
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white font-semibold rounded-lg text-sm hover:bg-brand-red-dark hover:shadow-lg transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            Call : {COMPANY.phone}
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-text-dark hover:text-brand-red transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-gray-100"
                    >
                        <div className="px-4 py-6 space-y-1">
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-text-dark hover:text-brand-red hover:bg-red-50 rounded-lg transition-all font-medium"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <div className="pt-4 flex gap-3">
                                <a
                                    href={`tel:${COMPANY.phone}`}
                                    className="flex-1 text-center px-4 py-3 bg-brand-red text-white font-semibold rounded-lg text-sm"
                                >
                                    Call Now
                                </a>
                                <a
                                    href={`https://wa.me/${COMPANY.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-4 py-3 bg-green-600 text-white font-semibold rounded-lg text-sm"
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
