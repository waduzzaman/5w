'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  designation?: string;
}

const testimonials: Testimonial[] = [
  { 
    quote: "Exceptional Media Relations service! Our brand gained unprecedented exposure and positive coverage. The team's strategic approach, timely responses, and strong media connections significantly enhanced our visibility. Grateful for their dedication to creating impactful narratives that resonated well with our target audience. Truly an invaluable partner", 
    author: "Sundeep Mehta", 
    designation: "Global PR & Corporate Communications",
    company: "COMVIVA" 
  },

  { 
    quote: "Working with 5W Communications transformed our project's visibility. They ensured consistent and impactful media coverage across leading outlets, amplifying our mission to a much wider audience. Their strategic storytelling and strong journalist network helped us achieve meaningful public engagement.", 
    author: "Asif Mahmud", 
    designation: "Development Worker · Project Management | PR & Strategic Communications",
    company: "JAAGO Foundation" 
  },
  {
  quote: "5W Communications played a pivotal role in strengthening our brand presence through strategic PR execution. Their ability to craft compelling narratives and secure meaningful media coverage significantly elevated our visibility in key markets. The team demonstrated strong industry insight, responsiveness, and a results-driven approach that aligned perfectly with our brand transformation goals. A highly reliable partner for impactful communications.",
  
  author: "Rafiqul Islam",
  
  designation: "Marketing & Brand Transformation Leader",
  
  company: "Intertek Bangladesh"
},
{
  quote: "5W Communications brought exceptional strategic value to our PR initiatives. Their deep understanding of the telecommunications landscape and ability to position our services through impactful media coverage significantly strengthened our brand presence nationwide. From crafting compelling narratives to ensuring consistent visibility across key platforms, their team delivered with precision and professionalism. Their support has been instrumental in reinforcing our commitment to innovation and customer-centric service across Bangladesh.",
  
  author: "Syed Samiul Huq",
  
  designation: "Managing Director",
  
  company: "Bahon Limited"
},

 
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true },
    [
      AutoScroll({
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  );

  return (
    <section className="py-24 bg-white border-t border-[#1a1a1a]/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-4">
            Testimonials
          </h2>
          <h3 className="text-5xl md:text-6xl font-serif font-light text-[#1a1a1a]">
            What Our Clients Say
          </h3>
        </div>

        {/* INFINITE CAROUSEL */}
        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {/* We duplicate the array to ensure enough items to fill width for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={i}
                className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_33.333%] min-w-0 pl-8"
              >
                <div className="group bg-[#f5f2ed] p-10 rounded-3xl border border-[#1a1a1a]/5 hover:border-brand-mulberry/20 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">

                  {/* Icon */}
                  <div className="text-brand-mulberry/20 group-hover:text-brand-mulberry transition mb-8">
                    <Quote size={40} fill="currentColor" />
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-gray-700 font-light italic mb-10 leading-relaxed flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="pt-8 border-t border-[#1a1a1a]/10 mt-auto">
                    <p className="font-semibold text-[#1a1a1a]">
                      {testimonial.author}
                    </p>

                    {testimonial.designation && (
                      <p className="text-xs text-gray-500 mt-1">
                        {testimonial.designation}
                      </p>
                    )}

                    <p className="text-xs uppercase tracking-widest text-brand-cobalt font-medium mt-2">
                      {testimonial.company}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonials.displayName = 'Testimonials';