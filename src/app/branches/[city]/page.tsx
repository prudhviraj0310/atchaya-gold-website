import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, MessageCircle, MapPin, Navigation } from "lucide-react";
import { BRANCHES, COMPANY } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import Navbar from "@/components/Navbar";

interface PageProps {
    params: Promise<{ city: string }>;
}

function getBranch(city: string) {
    return BRANCHES.find((b) => b.slug === city);
}

export async function generateStaticParams() {
    return BRANCHES.map((b) => ({ city: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params;
    const branch = getBranch(city);
    if (!branch) return {};

    return {
        title: `Best Gold Buyer in ${branch.city} | Sell Gold at Best Price | Atchaya Gold Company`,
        description: `Sell your gold at the best market rate in ${branch.city}, Tamil Nadu. Instant payment, certified XRF testing, transparent pricing. Visit Atchaya Gold Company ${branch.city} branch or book doorstep pickup.`,
        keywords: [
            `gold buyer ${branch.city}`,
            `sell gold ${branch.city}`,
            `gold rate ${branch.city}`,
            `best gold rate ${branch.city}`,
            `instant gold payment ${branch.city}`,
        ],
        openGraph: {
            title: `Sell Gold in ${branch.city} at Best Price | Atchaya Gold Company`,
            description: `Trusted gold buyers in ${branch.city}. Get instant payment with certified testing. Visit our branch today.`,
        },
    };
}

export default async function BranchPage({ params }: PageProps) {
    const { city } = await params;
    const branch = getBranch(city);
    if (!branch) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Atchaya Gold Company - ${branch.city}`,
        description: `Best gold buyer in ${branch.city}. Sell gold at market rate with instant bank payment.`,
        telephone: `+91${branch.phone || COMPANY.phone}`,
        address: {
            "@type": "PostalAddress",
            streetAddress: branch.address,
            addressLocality: branch.city,
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: branch.lat, longitude: branch.lng },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <div className="bg-white min-h-screen">
                <Navbar />

                {/* Header */}
                <div className="pt-28 pb-12 bg-mint-bg border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-red transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
                            <div className="max-w-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
                                        <MapPin className="w-3.5 h-3.5 text-brand-red" />
                                        <span className="text-xs text-brand-red font-bold uppercase tracking-wider">Branch</span>
                                    </div>
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold text-text-dark mb-4 font-serif leading-tight">
                                    Gold Buyer in <span className="text-brand-red underline decoration-brand-red/20 underline-offset-4">{branch.city}</span>
                                </h1>
                                <p className="text-text-muted text-lg leading-relaxed mb-8">
                                    Visit our {branch.city} branch for certified gold testing, transparent valuation, and instant bank payment. No hidden charges.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={`tel:${branch.phone || COMPANY.phone}`}
                                        className="flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-bold rounded-xl text-sm hover:shadow-xl hover:shadow-brand-red/20 hover:scale-105 transition-all"
                                    >
                                        <Phone className="w-4 h-4" />
                                        Call Branch
                                    </a>
                                    <a
                                        href={`https://wa.me/${COMPANY.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-green-600 font-semibold rounded-xl text-sm hover:border-green-500 hover:bg-green-50 transition-all"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </a>
                                    <a
                                        href={branch.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-text-dark font-semibold rounded-xl text-sm hover:border-brand-red hover:text-brand-red transition-all"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Directions
                                    </a>
                                </div>
                            </div>

                            {/* Branch Details Card */}
                            <div className="w-full lg:w-auto bg-white p-6 rounded-2xl border border-gray-100 shadow-lg min-w-[300px]">
                                <h3 className="font-bold text-text-dark mb-4 border-b border-gray-100 pb-2">Branch Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-xs text-text-muted mb-1">Address</div>
                                        <div className="text-sm font-medium text-text-dark leading-snug">{branch.address}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted mb-1">Phone</div>
                                        <div className="text-sm font-medium text-text-dark">+91 {branch.phone || COMPANY.phone}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-text-muted mb-1">Working Hours</div>
                                        <div className="text-sm font-medium text-text-dark">Mon - Sat: 9:30 AM - 8:30 PM</div>
                                        <div className="text-sm font-medium text-text-dark">Sun: 10:00 AM - 6:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEO Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-text-dark mb-4 font-serif">
                            Why Sell Gold at Atchaya Gold Company {branch.city}?
                        </h2>
                        <div className="prose prose-red text-text-muted">
                            <p className="mb-4">
                                Looking for the <strong className="text-brand-red">best gold buyer in {branch.city}</strong>? Atchaya Gold Company offers the highest market rates for your gold with instant bank payment. Our {branch.city} branch is equipped with advanced XRF purity testing machines for accurate, non-destructive gold testing right before your eyes.
                            </p>
                            <p>
                                Whether you have old jewelry, gold coins, broken ornaments, or gold bars — we buy all types of gold at competitive market rates. We guarantee complete transparency with no hidden deductions or charges. Thousands of customers in {branch.city} and surrounding areas trust us for fair gold valuations.
                            </p>
                        </div>
                    </div>
                </div>

                <ContactForm />
                <Footer />
                <StickyMobileBar />
            </div>
        </>
    );
}
