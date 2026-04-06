// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowRight, CheckCircle2 } from 'lucide-react';
// import { prisma } from '@/lib/prisma';

// export default async function Home() {
//   const latestBlogs = await prisma.blog.findMany({
//     where: { status: 'PUBLISHED' },
//     orderBy: { createdAt: 'desc' },
//     take: 3,
//     include: { author: true, category: true },
//   });

//   return (
//     <div className="flex flex-col min-h-screen bg-[#f5f2ed] text-[#1a1a1a]">
//       {/* Editorial Hero Section */}
//       <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-12 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-6xl mx-auto text-center">
//             <p className="text-xs font-bold tracking-[0.3em] text-brand-cobalt uppercase mb-8">
//               5W Communications • Dhaka
//             </p>
//               <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-serif font-bold tracking-tight mb-8 text-[#1a1a1a]">
//                 Strategic Communications <br/><span className="font-light italic text-brand-mulberry">for the Modern Era</span>
//               </h1>
//             <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light mb-12">
//               A premium public relations agency crafting compelling narratives that resonate and drive results.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//               <Link
//                 href="/contact"
//                 className="group relative inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-white bg-[#1a1a1a] rounded-full overflow-hidden transition-all hover:scale-105"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Get Started
//                   <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Link>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-full hover:bg-[#1a1a1a]/5 transition-colors"
//               >
//                 Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
        
//         {/* Decorative Grid Lines */}
//         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#1a1a1a]/5 -z-10"></div>
//         <div className="absolute left-1/2 top-0 w-[1px] h-full bg-[#1a1a1a]/5 -z-10"></div>
//       </section>

//       {/* Featured Image Break */}
//       <section className="w-full px-4 sm:px-6 lg:px-8 pb-24">
//         <div className="container mx-auto">
//           <div className="relative h-[50vh] md:h-[70vh] w-full rounded-3xl overflow-hidden">
//              <Image
//                 src="https://picsum.photos/seed/pr-hero/1920/1080"
//                 alt="PR Agency Team"
//                 fill
//                 className="object-cover"
//                 referrerPolicy="no-referrer"
//                 priority
//               />
//           </div>
//         </div>
//       </section>

//       {/* About Preview - Split Layout */}
//       <section className="py-24 border-t border-[#1a1a1a]/10">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//             <div className="sticky top-24">
//               <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-6">About Us</h2>
//               <h3 className="text-5xl md:text-6xl font-serif font-light leading-tight mb-8">
//                 Strategic <br/><span className="italic">Communications</span><br/> for the Modern Era
//               </h3>
//               <Link
//                   href="/about"
//                   className="inline-flex items-center text-xs uppercase tracking-[0.1em] font-bold border-b border-[#1a1a1a] pb-1 hover:text-brand-mulberry hover:border-brand-mulberry transition-colors"
//                 >
//                   Discover Our Agency
//                   <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </div>
//             <div className="space-y-12">
//               <p className="text-2xl text-gray-600 leading-relaxed font-light">
//                 At 5W Communications, we believe in the power of storytelling. Our team of seasoned professionals combines traditional PR expertise with cutting-edge digital strategies to deliver impactful campaigns.
//               </p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#1a1a1a]/10">
//                 {[
//                   { title: 'Data-Driven', desc: 'Strategies backed by analytics and market research.' },
//                   { title: 'Media Network', desc: 'Extensive connections across Bangladesh and beyond.' },
//                   { title: 'Crisis Management', desc: 'Expert guidance protecting your reputation.' },
//                   { title: 'Creative Campaigns', desc: 'Award-winning concepts that capture attention.' }
//                 ].map((item, i) => (
//                   <div key={i}>
//                     <h4 className="font-serif text-xl mb-2">{item.title}</h4>
//                     <p className="text-gray-500 font-light">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Preview - Grid */}
//       <section className="py-24 bg-[#1a1a1a] text-[#f5f2ed]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
//             <div>
//               <h2 className="text-xs font-bold tracking-[0.2em] text-brand-mulberry uppercase mb-4">Our Expertise</h2>
//               <h3 className="text-5xl font-serif font-light">Comprehensive Solutions</h3>
//             </div>
//             <Link href="/services" className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.1em] font-bold hover:text-brand-mulberry transition-colors">
//               View All Services <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
//             {[
//               { title: 'Story Telling', desc: 'Embark on a narrative journey with our Storytelling service. We craft compelling tales, connecting audiences with your brand, conveying messages that resonate, and leaving a lasting impact.' },
//               { title: 'Stakeholder Relations', desc: 'Foster meaningful connections with our Stakeholder Relations service. We navigate relationships with precision, ensuring positive engagements with legislators, local administrations, NGOs, and communities for sustained business success.' },
//               { title: 'Event Management', desc: 'Elevate your events with precision through our Event Management service. We conceptualize, plan, and execute memorable experiences, reinforcing your brand\'s identity and values for lasting impact and engagement.' },
//               { title: 'Government Relations', desc: 'Effortlessly navigate regulatory complexities with our experts. We establish vital connections with government bodies, advocate for policies, ensuring your brand\'s voice is heard, fostering positive relationships with regulatory authorities.' },
//               { title: 'Executive Profiling', desc: 'Strategically shape executive images. We craft compelling narratives, showcase leadership qualities, and enhance the public image of executives. Our profiling strategies position your leadership team as industry authorities and thought leaders.' },
//               { title: 'Media Relations', desc: 'We diligently establish and nurture relationships with key media outlets, ensuring strategic brand placements. Our efforts guarantee that your brand is featured in the right places at the right time, fostering positive coverage and enhancing your overall media presence.' }
//             ].map((service, i) => (
//               <div key={i} className="group cursor-pointer">
//                 <div className="text-brand-mulberry/50 font-serif text-2xl mb-4 italic">0{i + 1}</div>
//                 <h4 className="text-2xl font-serif font-light mb-4 group-hover:text-brand-mulberry transition-colors">{service.title}</h4>
//                 <p className="text-gray-400 font-light leading-relaxed">{service.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Client Testimonials */}
//       <section className="py-24 bg-white border-t border-[#1a1a1a]/10">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-4">Testimonials</h2>
//             <h3 className="text-5xl font-serif font-light text-[#1a1a1a]">What Our Clients Say</h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { quote: "5W Communications transformed our brand narrative. Their strategic approach and media connections are unparalleled.", author: "CEO, Tech Innovators", company: "Tech Innovators" },
//               { quote: "Their crisis management team was exceptional. They guided us through a difficult time with professionalism and grace.", author: "Director of Comms, Global Corp", company: "Global Corp" },
//               { quote: "The event they managed for our product launch was flawless. It generated incredible buzz and exceeded all expectations.", author: "Marketing Head, Lifestyle Brand", company: "Lifestyle Brand" }
//             ].map((testimonial, i) => (
//               <div key={i} className="bg-[#f5f2ed] p-8 rounded-2xl shadow-sm border border-[#1a1a1a]/5">
//                 <div className="text-brand-mulberry mb-6">
//                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M14.017 21L16.09 14.067C16.246 13.541 16.324 13.003 16.324 12.464V3H22V12.464C22 16.082 20.36 19.198 17.514 21H14.017ZM5.017 21L7.09 14.067C7.246 13.541 7.324 13.003 7.324 12.464V3H13V12.464C13 16.082 11.36 19.198 8.514 21H5.017Z" />
//                   </svg>
//                 </div>
//                 <p className="text-lg text-gray-700 font-light italic mb-8 leading-relaxed">
//                   &quot;{testimonial.quote}&quot;
//                 </p>
//                 <div>
//                   <p className="font-bold text-[#1a1a1a]">{testimonial.author}</p>
//                   <p className="text-sm text-gray-500">{testimonial.company}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Latest Blog Posts - Editorial Layout */}
//       <section className="py-24 bg-[#f5f2ed]">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-4">Insights</h2>
//             <h3 className="text-5xl font-serif font-light text-[#1a1a1a]">Latest Perspectives</h3>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {latestBlogs.map((blog, i) => (
//               <div key={blog.id} className={`group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
//                 <Link href={`/blog/${blog.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative">
//                   <div className={`relative ${i === 0 ? 'h-[400px] lg:h-[600px]' : 'h-[300px]'} w-full`}>
//                     <Image
//                       src={blog.featuredImage || `https://picsum.photos/seed/blog${i}/800/600`}
//                       alt={blog.title}
//                       fill
//                       className="object-cover transition-transform duration-700 group-hover:scale-105"
//                       referrerPolicy="no-referrer"
//                     />
//                   </div>
//                 </Link>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-500 font-semibold">
//                     <span className="text-brand-mulberry">{blog.category?.name}</span>
//                     <span>•</span>
//                     <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
//                   </div>
//                   <h4 className={`${i === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-serif font-light text-[#1a1a1a] group-hover:text-brand-mulberry transition-colors leading-tight`}>
//                     <Link href={`/blog/${blog.slug}`}>
//                       {blog.title}
//                     </Link>
//                   </h4>
//                   <p className="text-gray-600 font-light line-clamp-2">{blog.excerpt}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 text-center">
//             <Link
//               href="/blog"
//               className="inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-full hover:bg-[#1a1a1a]/5 transition-colors"
//             >
//               View All Articles
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-32 bg-brand-mulberry text-white text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
//           <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-tight">Ready to elevate <br/><span className="italic">your brand?</span></h2>
//           <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
//             Let&apos;s discuss how our strategic communications approach can help you achieve your business goals.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center px-12 py-6 text-sm uppercase tracking-[0.15em] font-medium text-brand-mulberry bg-white rounded-full hover:scale-105 transition-transform shadow-2xl"
//           >
//             Contact Us Today
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

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
