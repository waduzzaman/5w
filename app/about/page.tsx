'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

// --- Interfaces ---
interface TeamMember {
  name: string;
  role: string;
  img: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

interface Approach {
  title: string;
  desc: string;
}

// --- Data Objects ---
const founders: TeamMember[] = [
  { 
    name: 'Jannatul Ferdous', 
    role: 'Co-Founder', 
    img: '/images/jannatul.jpg',
    socials: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  { 
    name: 'Zahedul Islam', 
    role: 'Co-Founder', 
    img: '/images/zahedul.jpg',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://www.linkedin.com/in/zahedul-islam-857278a/'
    }
  },
];

const teamMembers: TeamMember[] = [
  { 
    name: 'Dilruba Akter', 
    role: 'Account Director', 
    img: '/images/dilruba.jpg',
    socials: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  { 
    name: 'Mahbub E Waduzzaman', 
    role: 'Digital Innovation and IT Consultant', 
    img: '/images/mahbub.png',
    socials: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  { 
    name: 'Nur Mehdi Manna', 
    role: 'Account Manager', 
    img: '/images/nur.png',
   socials: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  { 
    name: 'Shishir Das', 
    role: 'Account Executive', 
    img: '/images/shishir.png',
    socials: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  },
  { 
    name: 'Ariful Islam', 
    role: 'Business Development Consultant', 
    img: '/images/ariful.jpg',
    socials: {
      facebook: 'https://facebook.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

const approaches: Approach[] = [
  { title: 'Analysis', desc: 'In-depth market and audience research.' },
  { title: 'Strategy', desc: 'Tailored communication frameworks.' },
  { title: 'Execution', desc: 'Integrated multi-channel delivery.' },
  { title: 'Optimization', desc: 'Continuous measurement and refinement.' }
];

// --- Main Component ---
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f2ed] text-[#1a1a1a]">
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 border-b border-[#1a1a1a]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-8">
            The Agency
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-[#1a1a1a] mb-12 leading-tight">
            About <br/><span className="italic text-brand-mulberry">5W Communications</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            We are a premier communications and public relations agency based in Dhaka, dedicated to crafting narratives that inspire action and drive measurable impact.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-32 bg-[#1a1a1a] text-[#f5f2ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-6">Our Methodology</h2>
                <h3 className="text-5xl md:text-6xl font-serif font-light leading-tight">
                  Data-Driven <br/><span className="italic text-blue-400">Strategies</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {approaches.map((item, i) => (
                  <div key={item.title}>
                    <div className="text-blue-500/50 font-serif text-xl mb-2 italic">0{i + 1}</div>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
               <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070" 
                alt="Strategy Meeting" 
                fill 
                className="object-cover opacity-80"
               />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Leadership */}
      <section className="py-32 bg-white/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase mb-6">The Visionaries</h2>
            <h3 className="text-5xl md:text-6xl font-serif font-light text-[#1a1a1a]">Leadership</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
             {founders.map((founder) => (
               <div key={founder.name} className="w-full md:w-[400px]">
                 <TeamMemberCard member={founder} highlighted />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Full Team Grid */}
      <section className="py-32 border-t border-[#1a1a1a]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 flex justify-between items-end">
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-6">Our Talent</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a]">Meet Our Team</h3>
            </div>
            <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Creative • Strategic • Digital
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Sub-component for Team Cards ---
function TeamMemberCard({ member, highlighted = false }: { member: TeamMember; highlighted?: boolean }) {
  return (
    <div className="group">
      <div className={`relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-500 ${highlighted ? 'ring-1 ring-brand-mulberry/20 group-hover:shadow-2xl' : ''}`}>
        <Image
          src={member.img}
          alt={member.name}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${highlighted ? '' : 'grayscale group-hover:grayscale-0'}`}
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <h4 className={`${highlighted ? 'text-3xl' : 'text-xl'} font-serif font-light text-[#1a1a1a] mb-2`}>
        {member.name}
      </h4>
      
      <p className={`${highlighted ? 'text-[10px]' : 'text-[9px]'} font-bold tracking-[0.2em] uppercase text-blue-600 mb-4`}>
        {member.role}
      </p>

      {/* Dynamic Social Links Mapping */}
      <div className="flex space-x-4 pt-2 border-t border-[#1a1a1a]/5">
        {member.socials?.facebook && (
          <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
            <Facebook size={14} />
          </a>
        )}
        
        {member.socials?.twitter && (
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <Twitter size={14} />
          </a>
        )}
        
        {member.socials?.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
            <Linkedin size={14} />
          </a>
        )}
      </div>
    </div>
  );
}