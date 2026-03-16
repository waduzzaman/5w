'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const pathname = usePathname();
  
  if (pathname.startsWith('/dashboard')) return null;

  return (
    <footer className="bg-[#1a1a1a] text-[#f5f2ed] pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Brand */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="font-serif text-4xl font-light tracking-tight text-[#f5f2ed]">
              5W <span className="italic text-brand-mulberry">Communications</span>
            </Link>
            <p className="text-lg text-gray-400 leading-relaxed font-light max-w-md">
              A premium communications and public relations agency based in Dhaka, Bangladesh, dedicated to elevating your brand&apos;s voice.
            </p>
            <div className="flex space-x-6 pt-4">
              <a href="https://www.facebook.com/profile.php?id=61557744772831" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-mulberry transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-mulberry transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/5wcommunications" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-mulberry transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-brand-mulberry">Agency</h3>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><Link href="/about" className="hover:text-[#f5f2ed] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#f5f2ed] transition-colors">Our Services</Link></li>
              <li><Link href="/clients" className="hover:text-[#f5f2ed] transition-colors">Featured Clients</Link></li>
              <li><Link href="/blog" className="hover:text-[#f5f2ed] transition-colors">Latest News</Link></li>
              <li><Link href="/contact" className="hover:text-[#f5f2ed] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-brand-mulberry">Contact</h3>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li>Hafiz Mansion (3rd Floor), 33 Kazi Nazrul Islam Ave</li>
              <li>Dhaka 1215, Bangladesh</li>
              <li className="pt-4">
                <a href="mailto:info@5wcommunications.com" className="hover:text-[#f5f2ed] transition-colors border-b border-gray-700 pb-1">
                  info@5wcommunications.com
                </a>
              </li>
              <li className="pt-2">
                <a href="tel:+8801716425306" className="hover:text-[#f5f2ed] transition-colors">
                  +8801716425306
                </a>
              </li>
              <li className="pt-2">
                <a href="tel:+880161703082" className="hover:text-[#f5f2ed] transition-colors">
                  +880 1617-03082
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} 5W Communications. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-[#f5f2ed] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#f5f2ed] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
