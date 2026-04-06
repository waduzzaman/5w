import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function BlogPreview() {
  // Fetching logic moved inside, just like your BlogPage
  const latestBlogs = await prisma.blog.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { createdAt: 'desc' },
    take: 3, // Only the top 3 for the homepage preview
    include: { author: true, category: true },
  });

  // If there are no blogs, return null so the section doesn't show up empty
  if (!latestBlogs || latestBlogs.length === 0) return null;

  return (
    <section className="py-24 bg-[#f5f2ed]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-brand-cobalt uppercase mb-4">Insights</h2>
          <h3 className="text-5xl font-serif font-light text-[#1a1a1a]">Latest Perspectives</h3>
        </div>
          
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog, i) => (
            <div key={blog.id} className={`group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <Link href={`/blog/${blog.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative">
                <div className={`relative ${i === 0 ? 'h-[400px] lg:h-[600px]' : 'h-[300px]'} w-full`}>
                  <Image
                    src={blog.featuredImage || `https://picsum.photos/seed/blog${i}/800/600`}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </Link>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  <span className="text-brand-mulberry">{blog.category?.name}</span>
                  <span>•</span>
                  <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h4 className={`${i === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'} font-serif font-light text-[#1a1a1a] group-hover:text-brand-mulberry transition-colors leading-tight`}>
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h4>
                <p className="text-gray-600 font-light line-clamp-2">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
          
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-full hover:bg-[#1a1a1a]/5 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}