"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  X,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

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
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
}

interface Approach {
  title: string;
  desc: string;
}

// --- Data Objects ---
const founders: TeamMember[] = [
  {
    name: "Jannatul Ferdous",
    role: "Co-Founder",
    img: "/images/jannatul.jpg",
    bio: "Jannatul is a visionary leader with over 12 years of experience in strategic communications and brand development. She specializes in crafting compelling narratives that drive organizational growth and public engagement.",
    email: "jannatul@5wcommunications.com",
    phone: "+880 1712-345678",
    location: "Dhaka, Bangladesh",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Zahedul Islam",
    role: "Co-Founder",
    img: "/images/zahedul.jpg",
    bio: "Zahedul brings deep expertise in digital transformation and integrated marketing. His innovative approach has helped numerous clients navigate complex communication challenges in the digital age.",
    email: "zahedul@5wcommunications.com",
    phone: "+880 1934-567890",
    location: "Dhaka, Bangladesh",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/zahedul-islam-857278a/",
    },
  },
];

const teamMembers: TeamMember[] = [
  {
    name: "Dilruba Akter",
    role: "Account Director",
    img: "/images/dilruba.jpg",
    bio: "Dilruba leads key client relationships with exceptional strategic insight and creative problem-solving skills. She has successfully managed high-profile accounts across multiple industries.",
    email: "dilruba@5wcommunications.com",
    phone: "+880 1512-345678",
    location: "Dhaka, Bangladesh",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Mahbub E Waduzzaman",
    role: "Digital Innovation and IT Consultant",
    img: "/images/mahbub.png",
    bio: "Mahbub drives digital innovation initiatives and technology strategy. His expertise spans emerging technologies, digital transformation, and data-driven marketing solutions.",
    email: "mahbub@5wcommunications.com",
    phone: "+880 1612-345678",
    location: "Dhaka, Bangladesh",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Nur Mehdi Manna",
    role: "Account Manager",
    img: "/images/nur.png",
    bio: "Nur excels in client account management and campaign execution. Her meticulous attention to detail and proactive communication style ensure seamless project delivery.",
    email: "nur@5wcommunications.com",
    phone: "+880 1812-345678",
    location: "Dhaka, Bangladesh",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Shishir Das",
    role: "Account Executive",
    img: "/images/shishir.png",
    bio: "Shishir supports account management with strategic planning and execution excellence. He brings fresh perspectives and strong analytical skills to client projects.",
    email: "shishir@5wcommunications.com",
    phone: "+880 1312-345678",
    location: "Dhaka, Bangladesh",
    socials: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
  },
];

const approaches: Approach[] = [
  { title: "Analysis", desc: "In-depth market and audience research." },
  { title: "Strategy", desc: "Tailored communication frameworks." },
  { title: "Execution", desc: "Integrated multi-channel delivery." },
  { title: "Optimization", desc: "Continuous measurement and refinement." },
];

// --- Main Component ---
export default function AboutPage() {
  // --- Modal State ---
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle body overflow on modal open/close
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f2ed] text-[#1a1a1a]">
      {/* Hover Modal */}
      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-white to-gray-50 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 z-10 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 transition-all duration-200 shadow-md border border-gray-100"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Image Section - Small and Elegant */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-serif font-light text-white drop-shadow-lg">
                    {selectedMember.name}
                  </h2>
                  <p className="text-sm font-semibold tracking-wider uppercase text-blue-300">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-7 p-8 md:p-10 flex flex-col">
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-[0.25em] text-blue-600 uppercase mb-2 block">
                    Official Profile
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-serif font-light text-gray-800 mb-3">
                    {selectedMember.name}
                  </h2>
                  <p className="text-base font-bold tracking-wider uppercase text-brand-cobalt">
                    {selectedMember.role}
                  </p>
                </div>

                {/* Bio */}
                <div className="mb-6 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-brand-mulberry to-brand-cobalt rounded-full" />
                    <span className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">
                      Professional Bio
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm pl-3 border-l-2 border-gray-100">
                    {selectedMember.bio}
                  </p>
                </div>

                {/* Contact Details */}
                {(selectedMember.email ||
                  selectedMember.phone ||
                  selectedMember.location) && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                      <span className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">
                        Contact Information
                      </span>
                    </div>
                    <div className="space-y-2.5 pl-3 border-l-2 border-gray-100">
                      {selectedMember.email && (
                        <div className="flex items-center gap-3 text-sm group">
                          <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-100 transition-colors">
                            <Mail size={14} />
                          </div>
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            {selectedMember.email}
                          </a>
                        </div>
                      )}
                      {selectedMember.phone && (
                        <div className="flex items-center gap-3 text-sm group">
                          <div className="w-7 h-7 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-100 transition-colors">
                            <Phone size={14} />
                          </div>
                          <span className="text-gray-600">
                            {selectedMember.phone}
                          </span>
                        </div>
                      )}
                      {selectedMember.location && (
                        <div className="flex items-center gap-3 text-sm group">
                          <div className="w-7 h-7 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-colors">
                            <MapPin size={14} />
                          </div>
                          <span className="text-gray-600">
                            {selectedMember.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Social Media Links */}
                {(selectedMember.socials?.linkedin ||
                  selectedMember.socials?.facebook ||
                  selectedMember.socials?.twitter) && (
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      <span className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">
                        Connect
                      </span>
                    </div>
                    <div className="flex gap-3">
                      {selectedMember.socials?.linkedin && (
                        <a
                          href={selectedMember.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                            <Linkedin size={14} />
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">
                            LinkedIn
                          </span>
                        </a>
                      )}
                      {selectedMember.socials?.facebook && (
                        <a
                          href={selectedMember.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                            <Facebook size={14} />
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">
                            Facebook
                          </span>
                        </a>
                      )}
                      {selectedMember.socials?.twitter && (
                        <a
                          href={selectedMember.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                            <Twitter size={14} />
                          </div>
                          <span className="text-sm text-gray-600 group-hover:text-blue-600 font-medium">
                            Twitter
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-44 sm:pt-48 md:pt-52 lg:pt-56 xl:pt-60 pb-24 border-b border-[#1a1a1a]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <p className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-8">
            The Agency
          </p>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-[#1a1a1a] mb-12 leading-tight">
            About <br />
            <span className="italic text-brand-mulberry">
              5W Communications
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
            We are a premier communications and public relations agency based in
            Dhaka, dedicated to crafting narratives that inspire action and
            drive measurable impact.
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-32 bg-[#1a1a1a] text-[#f5f2ed]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-6">
                  Our Methodology
                </h2>
                <h3 className="text-5xl md:text-6xl font-serif font-light leading-tight">
                  Data-Driven <br />
                  <span className="italic text-blue-400">Strategies</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {approaches.map((item, i) => (
                  <div key={item.title}>
                    <div className="text-blue-500/50 font-serif text-xl mb-2 italic">
                      0{i + 1}
                    </div>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-gray-500 font-light text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Strategy Meeting"
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 transition duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Leadership */}
      <section className="py-32 bg-white/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase mb-6">
              The Visionaries
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif font-light text-[#1a1a1a]">
              Leadership
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
            {founders.map((founder) => (
              <div key={founder.name} className="w-full md:w-[400px]">
                <TeamMemberCard
                  member={founder}
                  highlighted
                  onClick={() => openModal(founder)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Full Team Grid */}
      <section className="py-32 border-t border-[#1a1a1a]/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-6">
              Our Talent
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light text-[#1a1a1a]">
              Meet Our Team
            </h3>
          </div>
          <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 text-center mb-12">
            Creative • Strategic • Digital
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 auto-rows-fr justify-items-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="h-full w-full max-w-xs">
                <TeamMemberCard
                  member={member}
                  onClick={() => openModal(member)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Sub-component for Team Cards ---
function TeamMemberCard({
  member,
  highlighted = false,
  onClick,
}: {
  member: TeamMember;
  highlighted?: boolean;
  onClick?: () => void;
}) {
  return (
    <div 
      className="group cursor-pointer h-full w-full" 
      onClick={onClick}
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full w-full ${highlighted ? "ring-2 ring-brand-mulberry/20" : ""}`}
      >
        {/* Image Container - Fixed Aspect Ratio */}
        <div className="relative aspect-[4/5] w-full overflow-hidden flex-shrink-0">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Click/Hover Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-brand-mulberry font-bold text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Details
            </div>
          </div>
        </div>

        {/* Content - Fixed Height */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <h4
            className={`${highlighted ? "text-2xl" : "text-xl"} font-serif font-semibold text-gray-900 mb-2`}
          >
            {member.name}
          </h4>

          <p
            className={`${highlighted ? "text-sm" : "text-xs"} font-bold tracking-wider uppercase text-brand-cobalt mb-4`}
          >
            {member.role}
          </p>

          {/* Decorative Line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-mulberry to-brand-cobalt rounded-full mb-4" />

          {/* Social Icons */}
          <div className="flex space-x-3 mt-auto">
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin size={16} />
              </a>
            )}
            {member.socials?.facebook && (
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Facebook size={16} />
              </a>
            )}
            {member.socials?.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 hover:bg-blue-50 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Twitter size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
