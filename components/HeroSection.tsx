'use client';
import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative w-full h-[100vh] overflow-hidden">
            {/* Background video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-white h-full text-center px-4">
                <h1 className="text-3xl md:text-5xl font-light mb-4">REMODEL THE RIGHT WAY</h1>
                <p className="text-lg md:text-2xl mb-6">San Diego's bathroom & kitchen remodeling experts.</p>

                <div className="flex flex-col md:flex-row gap-4">
                    <button className="bg-[#EB847D] text-white px-6 py-3 rounded-md font-medium">
                        888 55 MBK 55
                    </button>
                    <button className="bg-[#1A6C7A] text-white px-6 py-3 rounded-md font-medium">
                        GET YOUR ESTIMATE
                    </button>
                </div>
            </div>
        </section>
    );
}
