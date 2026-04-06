import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

const testimonials: Testimonial[] = [
  { 
    quote: "5W Communications transformed our brand narrative. Their strategic approach and media connections are unparalleled.", 
    author: "Chief Executive Officer", 
    company: "Tech Innovators BD" 
  },
  { 
    quote: "Their crisis management team was exceptional. They guided us through a difficult time with professionalism and grace.", 
    author: "Director of Communications", 
    company: "Global Logistics Corp" 
  },
  { 
    quote: "The event they managed for our product launch was flawless. It generated incredible buzz and exceeded all expectations.", 
    author: "Head of Marketing", 
    company: "Luxe Lifestyle Brand" 
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-[#1a1a1a]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-4">
            Testimonials
          </h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-[#1a1a1a]">
            What Our Clients Say
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i} 
              className="group bg-[#f5f2ed] p-10 rounded-3xl border border-[#1a1a1a]/5 hover:border-brand-mulberry/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="text-brand-mulberry/20 group-hover:text-brand-mulberry transition-colors mb-8">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Quote Text */}
              <p className="text-xl text-gray-700 font-light italic mb-10 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div className="pt-8 border-t border-[#1a1a1a]/10">
                <p className="font-bold text-[#1a1a1a] tracking-tight">
                  {testimonial.author}
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-cobalt font-medium mt-1">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Testimonials.displayName = 'Testimonials';