'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const clients = [
  { 
    name: 'Adani Power', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Adani_logo_2012.svg/1280px-Adani_logo_2012.svg.png', 
    bgImage: 'https://c.ndtvimg.com/2025-05/6asvamrk_adani-power-plant-up_625x300_10_May_25.jpeg', 
    url: 'https://www.adani.com/businesses/energy-utilities/thermal-power' 
  },
  { 
    name: 'Intertek', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkaVsuS6so0zmr6sTV-C2nv9NPRo_4gcBxA&s', 
    bgImage: 'https://accuvio.com/wp-content/uploads/2018/09/intertek-1.png', 
    url: 'https://www.intertek.com/bangladesh/' 
  },
  { 
    name: 'Bahon Limited', 
    logo: 'https://www.bahon.com/assets/images/logo.png', 
    bgImage: 'https://i.ibb.co/60BPLLD6/bahon.png', 
    url: 'https://www.bahon.com/' 
  },
  { 
    name: 'Jaago Foundation', 
    logo: 'https://upload.wikimedia.org/wikipedia/en/0/06/JAAGO_Foundation.jpeg', 
    bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9NXaI-lBRMHIxLmPuVya7yI2OIpp66Ir_RA&s', 
    url: 'https://jaago.com.bd/' 
  }
];

export default function ClientsSection() {
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#1a1a1a]/5 pb-10">
          <div className="max-w-2xl">
            <h2 className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase mb-4">Our Partners</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1a1a]">
              Trusted by <span className="font-light italic text-blue-500">Industry Leaders</span>
            </h3>
          </div>
          <Link href="/clients" className="group hidden md:inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]">
            Explore Roster
            <div className="ml-4 p-2 rounded-full border border-[#1a1a1a]/10 group-hover:bg-blue-50 group-hover:border-blue-600 transition-all">
              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>

      {/* INFINITE CAROUSEL */}
      <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {/* We duplicate the array or ensure enough items to fill width for seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_25%] min-w-0 pl-8"
            >
              <Link 
                href={client.url} 
                target="_blank" 
                className="block group relative h-64 rounded-3xl overflow-hidden bg-[#1a1a1a]"
              >
                {/* Background Image with Overlay */}
                <Image
                  src={client.bgImage}
                  alt=""
                  fill
                  className="object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={100}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <div className="p-2 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-serif text-xl font-medium tracking-tight group-hover:text-blue-300 transition-colors">
                      {client.name}
                    </p>
                    <div className="h-[1px] w-0 group-hover:w-full bg-blue-500/50 transition-all duration-500 mt-2" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}