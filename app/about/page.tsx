import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f2ed] text-[#1a1a1a]">
      {/* Hero */}
      <section className="pt-40 pb-24 border-b border-[#1a1a1a]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <p className="text-xs font-bold tracking-[0.3em] text-brand-cobalt uppercase mb-8">
            The Agency
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-[#1a1a1a] mb-12 leading-tight">
            About <br/><span className="italic text-brand-mulberry">5W Communications</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            We are a premier communications and public relations agency based in Dhaka, Bangladesh, dedicated to crafting narratives that inspire action and build lasting relationships.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase">Our Mission</h2>
              <h3 className="text-4xl font-serif font-light leading-snug">
                To empower brands with strategic communication solutions that drive growth and enhance reputation.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                We foster meaningful connections with target audiences in an ever-evolving digital landscape, ensuring your message not only reaches but resonates with the right people.
              </p>
            </div>
            <div className="space-y-8">
              <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase">Our Vision</h2>
              <h3 className="text-4xl font-serif font-light leading-snug">
                To be the most trusted and innovative communications partner in Bangladesh.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Recognized globally for our creative excellence, strategic insight, and measurable impact. We strive to set new standards in the PR industry through continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-[#1a1a1a] text-[#f5f2ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-6">Our Approach</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-light leading-tight">
                  Data-Driven <br/><span className="italic text-brand-mulberry">Strategies</span> Meets Creative Storytelling
                </h3>
              </div>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                We don&apos;t believe in one-size-fits-all solutions. Our approach is rooted in deep research, strategic thinking, and creative execution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {[
                  { title: 'Analysis', desc: 'In-depth market and audience research.' },
                  { title: 'Strategy', desc: 'Tailored communication frameworks.' },
                  { title: 'Execution', desc: 'Integrated multi-channel delivery.' },
                  { title: 'Optimization', desc: 'Continuous measurement and refinement.' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-brand-mulberry/50 font-serif text-xl mb-2 italic">0{i + 1}</div>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] lg:h-[800px] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/pr-approach/1200/1600"
                alt="Our Approach"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase mb-6">Leadership</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-light text-[#1a1a1a]">Meet Our Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
            {[
              { name: 'Dilruba Akter', role: 'Account Director', img: 'https://picsum.photos/seed/dilruba/800/1000' },
              { name: 'Mahbub E Waduzzaman', role: 'Digital Innovation and IT Consultant', img: 'https://picsum.photos/seed/mahbub/800/1000' },
              { name: 'Nur Mehdi Manna', role: 'Account Manager', img: 'https://picsum.photos/seed/manna/800/1000' },
              { name: 'Shishir Das', role: 'Account Executive', img: 'https://picsum.photos/seed/shishir/800/1000' },
              { name: 'Ariful Islam', role: 'Business Development Consultant', img: 'https://picsum.photos/seed/ariful/800/1000' }
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-xl">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-serif font-light text-[#1a1a1a] mb-2">{member.name}</h4>
                <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-brand-cobalt mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-brand-mulberry transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-mulberry transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-mulberry transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
