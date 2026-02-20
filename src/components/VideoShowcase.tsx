"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const VIDEOS = [
    { src: "/videos/promo-1.mp4", title: "Gold Buying Process", desc: "See how we evaluate and buy your gold", poster: "/images/video-thumb-1.png" },
    { src: "/videos/promo-2.mp4", title: "Our Branches", desc: "A look inside our trusted offices", poster: "/images/video-thumb-2.png" },
    { src: "/videos/promo-3.mp4", title: "Customer Stories", desc: "Hear from our happy customers", poster: "/images/video-thumb-3.png" },
];

function VideoCard({ video, index }: { video: typeof VIDEOS[0]; index: number }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (playing) {
                videoRef.current.pause();
                videoRef.current.muted = true;
            } else {
                videoRef.current.muted = false;
                videoRef.current.play();
            }
            setPlaying(!playing);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="group relative"
        >
            <div
                className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer"
                onClick={togglePlay}
            >
                <div className="aspect-video relative">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        loop
                        preload="none"
                        poster={video.poster}
                        onEnded={() => setPlaying(false)}
                    >
                        <source src={video.src} type="video/mp4" />
                    </video>

                    {/* Play Button Overlay */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                    >
                        <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                            {playing ? (
                                <Pause className="w-6 h-6 text-white" />
                            ) : (
                                <Play className="w-6 h-6 text-white ml-1" />
                            )}
                        </div>
                    </div>
                </div>

                {/* Info */}
                <div className="p-4">
                    <h3 className="text-sm font-semibold text-text-dark">{video.title}</h3>
                    <p className="text-xs text-text-muted mt-1">{video.desc}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function VideoShowcase() {
    return (
        <section id="video-showcase" className="relative py-20 bg-light-bg">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-3 font-serif">
                        See Us in <span className="text-brand-red">Action</span>
                    </h2>
                    <p className="text-text-muted max-w-xl mx-auto">
                        Watch how Atchaya Gold Company provides a transparent and trustworthy gold selling experience.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {VIDEOS.map((video, i) => (
                        <VideoCard key={video.src} video={video} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
