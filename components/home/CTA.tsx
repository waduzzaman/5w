import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 bg-brand-mulberry text-white text-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div 
        className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent -z-0" 
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="space-y-8">
          {/* Tagline */}
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/60">
            Let's Start a Conversation
          </p>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.1]">
            Ready to elevate <br />
            <span className="italic">your brand's voice?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            From strategic storytelling to crisis management, discover how our premium communications approach can help you achieve your business goals in the modern era.
          </p>

          {/* Action Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold text-brand-mulberry bg-white rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              Contact Us Today
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Branding Element (Bottom Right) */}
      <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
        <span className="text-[200px] font-serif italic select-none">5W</span>
      </div>
    </section>
  );
}