"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function StickyMobileBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="grid grid-cols-3 h-16">
                <a
                    href={`tel:${COMPANY.phone}`}
                    className="flex flex-col items-center justify-center gap-1 text-text-muted hover:text-brand-red active:bg-gray-50 transition-colors"
                >
                    <Phone className="w-5 h-5" />
                    <span className="text-[10px] font-medium">Call Now</span>
                </a>

                <a
                    href="#contact"
                    className="flex flex-col items-center justify-center gap-1 bg-brand-red text-white -mt-6 mb-2 rounded-full shadow-lg shadow-brand-red/30 border-4 border-white"
                >
                    <FileText className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Get Quote</span>
                </a>

                <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-1 text-text-muted hover:text-green-600 active:bg-gray-50 transition-colors"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-[10px] font-medium">WhatsApp</span>
                </a>
            </div>
        </div>
    );
}
