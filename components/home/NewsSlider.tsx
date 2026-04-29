'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clientNews = [
  {
    tag: "Success Story",
    title: "How 5W Helped Tech-BD Reach 1M Users",
    date: "March 2026",
    image: "https://picsum.photos/seed/pr1/800/1200",
    url: "#",
    description: "A comprehensive digital PR strategy that dominated headlines."
  },
  {
    tag: "Milestone",
    title: "Green Energy Summit Impact",
    date: "Feb 2026",
    image: "https://picsum.photos/seed/pr2/800/1200",
    url: "#",
    description: "Positioning Bangladesh globally in sustainability."
  },
  {
    tag: "Award",
    title: "Top PR Agency 2025",
    date: "Jan 2026",
    image: "https://picsum.photos/seed/pr3/800/1200",
    url: "#",
    description: "Recognized for innovation and storytelling."
  },
  {
    tag: "Growth",
    title: "Global Expansion Success",
    date: "Dec 2025",
    image: "https://picsum.photos/seed/pr4/800/1200",
    url: "#",
    description: "Expanding reach across 5+ countries."
  }
];

export default function NewsSlider() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true // 🔥 smoother feel
    },
    [
      Autoplay({
        delay: 0, // 🔥 continuous motion
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  return (
    <section className="py-24 bg-[#1a1a1a] text-[#f5f2ed] overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-xs tracking-[0.2em] text-purple-400 uppercase mb-4">
            Press & Recognition
          </h2>
          <h3 className="text-5xl font-serif font-light">
            Latest Positive News
          </h3>
        </div>

        {/* Slider */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-8">

            {clientNews.map((news, i) => (
              <div
                key={i}
                className="flex-[0_0_300px] md:flex-[0_0_350px] relative group"
              >
                <Link href={news.url} className="block h-full">

                  <div className="relative h-[500px] rounded-[2rem] overflow-hidden border border-white/10 bg-[#222]">

                    {/* Image */}
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 p-6">
                      <span className="text-[10px] uppercase text-blue-400">
                        {news.tag}
                      </span>

                      <h4 className="text-xl mt-2 mb-2 group-hover:text-blue-400 transition">
                        {news.title}
                      </h4>

                      <p className="text-sm text-gray-300 mb-4">
                        {news.description}
                      </p>

                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span>{news.date}</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>

                  </div>

                </Link>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}