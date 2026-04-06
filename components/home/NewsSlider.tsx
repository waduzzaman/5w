'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, ArrowUpRight, ExternalLink } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const clientNews = [
  {
    tag: "Success Story",
    title: "How 5W Helped Tech-BD Reach 1M Users",
    date: "March 2026",
    image: "https://picsum.photos/seed/pr1/800/500",
    url: "https://example.com/news-1", // Add your original news links here
    description: "A comprehensive digital PR strategy that dominated local headlines for three consecutive months."
  },
  {
    tag: "Milestone",
    title: "Leading the PR Narrative for Green Energy Summit",
    date: "Feb 2026",
    image: "https://picsum.photos/seed/pr2/800/500",
    url: "https://example.com/news-2",
    description: "Positioning Bangladesh as a hub for sustainable energy through international media placements."
  },
  {
    tag: "Award",
    title: "Voted Top PR Agency in Dhaka for 2025",
    date: "Jan 2026",
    image: "https://picsum.photos/seed/pr3/800/500",
    url: "https://example.com/news-3",
    description: "Recognized for our innovative approach to crisis management and brand storytelling."
  }  ,
  {
    tag: "Award",
    title: "Voted Top PR Agency in Dhaka for 2025",
    date: "Jan 2026",
    image: "https://picsum.photos/seed/pr3/800/500",
    url: "https://example.com/news-3",
    description: "Recognized for our innovative approach to crisis management and brand storytelling."
  } ,
  {
    tag: "Award",
    title: "Voted Top PR Agency in Dhaka for 2025",
    date: "Jan 2026",
    image: "https://picsum.photos/seed/pr3/800/500",
    url: "https://example.com/news-3",
    description: "Recognized for our innovative approach to crisis management and brand storytelling."
  }
];

export default function NewsSlider() {
  const [emblaRef] = useEmblaCarousel(
    { align: 'start', loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="py-24 bg-[#1a1a1a] text-[#f5f2ed]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Matching ServicesPreview Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase mb-4">
              Press & Recognition
            </h2>
            <h3 className="text-5xl font-serif font-light">Latest Positive News</h3>
          </div>
          <div className="hidden md:block text-xs uppercase tracking-[0.1em] text-gray-500 font-bold italic">
            Media Coverage & Impact
          </div>
        </div>
        
        {/* Embla Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-8">
            {clientNews.map((news, i) => (
              <div 
                key={i} 
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_31%] relative group"
              >
                {/* Link wrapper for the whole card */}
                <Link href={news.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                  
                  {/* Outer Dark Border Layer */}
                  <div className="absolute inset-0 bg-white/[0.02] rounded-[2rem] border border-white/5 -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                  
                  {/* Main Dark Card */}
                  <div className="relative h-full bg-[#222] p-0 rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/40 overflow-hidden flex flex-col">
                    
                    {/* News Screenshot Area */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#222] to-transparent z-10" />
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute top-6 left-6 z-20">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 px-3 py-1 rounded-full bg-[#1a1a1a]/80 border border-blue-500/20 backdrop-blur-md">
                          {news.tag}
                        </span>
                      </div>
                      
                      {/* Floating Link Indicator */}
                      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="p-2 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                            <ExternalLink className="h-4 w-4" />
                         </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-8 pt-2 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-2xl font-serif font-light leading-[1.3] group-hover:text-blue-400 transition-colors">
                          {news.title}
                        </h4>
                        <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-blue-400 transition-all flex-shrink-0 ml-2" />
                      </div>
                      
                      <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 line-clamp-3">
                        {news.description}
                      </p>

                      {/* Footer Row */}
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="h-[1px] w-6 bg-blue-500/30"></div>
                          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                            {news.date}
                          </span>
                        </div>
                        
                        {/* Interactive Link Label */}
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-tighter opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                          Read Full Story
                        </span>
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

NewsSlider.displayName = 'NewsSlider';