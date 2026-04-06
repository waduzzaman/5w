import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const coreValues = [
  { title: 'Data-Driven', desc: 'Strategies backed by deep analytics and local market research.' },
  { title: 'Media Network', desc: 'Extensive connections across Bangladesh and international outlets.' },
  { title: 'Crisis Management', desc: 'Expert guidance protecting your reputation in high-stakes moments.' },
  { title: 'Creative Campaigns', desc: 'Award-winning concepts that capture attention and drive action.' }
];

export default function AboutPreview() {
  return (
    <section className="py-32 bg-[#f5f2ed] border-t border-[#1a1a1a]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-[0.3em] text-brand-cobalt uppercase">
                About Our Agency
              </h2>
              <h3 className="text-5xl md:text-7xl font-serif font-light leading-[1.1] text-[#1a1a1a]">
                Strategic <br />
                <span className="italic text-brand-mulberry">Communications</span><br /> 
                for the Modern Era
              </h3>
            </div>
            
            <Link
              href="/about"
              className="group inline-flex items-center text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-[#1a1a1a] pb-2 hover:text-brand-mulberry hover:border-brand-mulberry transition-all duration-300"
            >
              Discover Our Agency
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Right Column Content */}
          <div className="space-y-16">
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
              At 5W Communications, we believe in the power of storytelling. Our team of seasoned professionals combines traditional PR expertise with cutting-edge digital strategies to deliver impactful campaigns.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16 pt-16 border-t border-[#1a1a1a]/10">
              {coreValues.map((value, i) => (
                <div key={i} className="group">
                  <div className="h-[1px] w-8 bg-brand-mulberry mb-6 group-hover:w-full transition-all duration-500 opacity-50" />
                  <h4 className="font-serif text-2xl mb-3 text-[#1a1a1a]">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}