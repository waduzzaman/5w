'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-12 bg-white">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5f2ed]/30 -z-10 skew-x-12 transform origin-top" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Brand Tagline */}
          <div className="inline-block mb-8">
            <p className="text-4xl font-bold  text-brand-cobalt uppercase animate-fade-in">
              <span className='text-5xl text-brand-mulberry'>5W</span> Communications •  <span className='text-slate-950'>Dhaka </span>
            </p>
            <div className="h-[1px] w-full bg-brand-mulberry/30 mt-2 scale-x-0 animate-expand-line" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-serif font-bold tracking-tight mb-8 text-[#1a1a1a]">
            Strategic Communications <br/>
            <span className="font-light italic text-brand-mulberry">for the Modern Era</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            A premium public relations agency crafting compelling narratives that resonate, influence, and drive measurable results.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-white bg-[#1a1a1a] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-brand-mulberry translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1a1a1a]/5 -z-10" />
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#1a1a1a]/5 -z-10" />
      
      {/* Bottom Visual Anchor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-[#1a1a1a]" />
      </div>
    </section>
  );
}