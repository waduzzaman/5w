import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  { title: 'Story Telling', desc: 'Crafting compelling tales that resonate and leave a lasting impact.' },
  { title: 'Stakeholder Relations', desc: 'Navigating relationships with legislators and communities.' },
  { title: 'Event Management', desc: 'Conceptualizing and executing memorable brand experiences.' },
  { title: 'Government Relations', desc: 'Navigating regulatory complexities with expert connections.' },
  { title: 'Executive Profiling', desc: 'Positioning leadership teams as industry authorities.' },
  { title: 'Media Relations', desc: 'Strategic brand placements and positive media coverage.' }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#1a1a1a] text-[#f5f2ed]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase mb-4">Our Expertise</h2>
            <h3 className="text-5xl font-serif font-light">Comprehensive Solutions</h3>
          </div>
          <Link href="/services" className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.1em] font-bold hover:text-brand-mulberry transition-colors">
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="text-brand-mulberry/50 font-serif text-2xl mb-4 italic">0{i + 1}</div>
              <h4 className="text-2xl font-serif font-light mb-4 group-hover:text-brand-mulberry transition-colors">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ServicesPreview.displayName = 'ServicesPreview';