import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import { BlogDashboardButton } from '@/components/blog-dashboard-button';

export default async function BlogPage() {
  const blogs = await prisma.blog.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { createdAt: 'desc' },
    include: { author: true, category: true },
  });

  const categories = await prisma.category.findMany();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-brand-text text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Our <span className="text-brand-mulberry">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Expert perspectives on public relations, digital marketing, and strategic communications.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogs.map((blog) => (
                  <div key={blog.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
                    <div className="relative h-64 flex-shrink-0">
                      <Image
                        src={blog.featuredImage || 'https://picsum.photos/seed/blog/800/600'}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <span className="text-brand-mulberry font-medium">{blog.category?.name}</span>
                        <span>•</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-brand-text mb-3 line-clamp-2">
                        <Link href={`/blog/${blog.slug}`} className="hover:text-brand-mulberry transition-colors">
                          {blog.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{blog.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt font-bold text-xs">
                            {blog.author.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{blog.author.name}</span>
                        </div>
                        <Link
                          href={`/blog/${blog.slug}`}
                          className="inline-flex items-center text-sm font-semibold text-brand-cobalt hover:text-brand-mulberry transition-colors"
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4 space-y-12">
              {/* Search */}
              <div className="bg-brand-light p-6 rounded-2xl">
                <h3 className="font-serif font-bold text-lg text-brand-text mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-mulberry focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-brand-light p-6 rounded-2xl">
                <h3 className="font-serif font-bold text-lg text-brand-text mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link href={`/blog?category=${category.slug}`} className="text-gray-600 hover:text-brand-mulberry transition-colors flex justify-between items-center">
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Management */}
              <div className="bg-brand-light p-6 rounded-2xl">
                <h3 className="font-serif font-bold text-lg text-brand-text mb-4">Management</h3>
                <BlogDashboardButton />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
