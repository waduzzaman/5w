import { prisma } from '@/lib/prisma';
import Hero from '@/components/home/Hero';
import NewsSlider from '@/components/home/NewsSlider';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import BlogPreview from '@/components/home/BlogPreview';
import CTA from '@/components/home/CTA';
import ClientsSection from '@/components/home/ClientsSection';

export default async function Home() {
  // // Server-side data fetching
  // const latestBlogs = await prisma.blog.findMany({
  //   where: { status: 'PUBLISHED' },
  //   orderBy: { createdAt: 'desc' },
  //   take: 3,
  //   include: { author: true, category: true },
  // });

  return (
    
    <main className="flex flex-col min-h-screen bg-[#f5f2ed] text-[#1a1a1a]">
      <Hero />
      <ClientsSection />     
      <AboutPreview />
      <ServicesPreview />
      <Testimonials />
      <BlogPreview />
       <NewsSlider />
      <CTA />
    </main>
  );
}
