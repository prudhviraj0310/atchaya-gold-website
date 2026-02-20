"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { BRANCHES, COMPANY } from "@/lib/constants";

export default function Footer() {
    return (
        <footer className="bg-light-bg border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold text-brand-red font-serif">
                                Atchaya Gold
                            </span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed mb-6">
                            We are Tamil Nadu&apos;s most trusted gold buyers, offering the highest market rates
                            and instant payments for your gold jewelry.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-text-muted hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-text-dark font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About Us", href: "#hero" },
                                { label: "Today's Gold Rate", href: "#gold-rate" },
                                { label: "Value Calculator", href: "#calculator" },
                                { label: "Our Branches", href: "#branches" },
                                { label: "Contact Us", href: "#contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted text-sm hover:text-brand-red hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                                    >
                                        <ArrowRight className="w-3 h-3" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branches */}
                    <div>
                        <h4 className="text-text-dark font-bold mb-6">Our Branches</h4>
                        <ul className="space-y-3">
                            {BRANCHES.slice(0, 5).map((branch) => (
                                <li key={branch.slug}>
                                    <Link
                                        href={`/branches/${branch.slug}`}
                                        className="text-text-muted text-sm hover:text-brand-red hover:translate-x-1 inline-flex items-center gap-2 transition-all"
                                    >
                                        <MapPin className="w-3 h-3" />
                                        {branch.city}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#branches"
                                    className="text-brand-red text-sm font-medium hover:underline"
                                >
                                    View All Branches →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-text-dark font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                                <span className="text-text-muted text-sm">{COMPANY.phone}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                                <span className="text-text-muted text-sm">contact@atchayagoldcompany.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                                <span className="text-text-muted text-sm">
                                    Head Office: Panruti, Cuddalore District, Tamil Nadu.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200 text-center">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Atchaya Gold Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
