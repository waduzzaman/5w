import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { prisma } from '@/lib/prisma';
import Markdown from 'react-markdown';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const blog = await prisma.blog.findUnique({
    where: { slug },
    include: { author: true, category: true, tags: true },
  });

  if (!blog || blog.status !== 'PUBLISHED') {
    notFound();
  }

  // Increment view count (in a real app, you'd do this via a client-side API call or edge function to avoid blocking render)
  await prisma.blogView.create({
    data: { blogId: blog.id },
  });

  return (
    <article className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <header className="bg-brand-light py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <Link href="/blog" className="inline-flex items-center text-brand-cobalt hover:text-brand-mulberry transition-colors mb-8 font-semibold">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-500">
            <span className="text-brand-mulberry font-bold uppercase tracking-widest">{blog.category?.name}</span>
            <span>•</span>
            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-text mb-8 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-text flex items-center justify-center text-white font-bold text-lg">
              {blog.author.name.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-serif font-bold text-brand-text">{blog.author.name}</p>
              <p className="text-sm text-gray-500">Author</p>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl -mt-12 relative z-10">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={blog.featuredImage}
              alt={blog.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-20">
        <div className="prose prose-lg prose-brand max-w-none">
          <div className="markdown-body">
            <Markdown>{blog.content}</Markdown>
          </div>
        </div>

        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            <span className="font-bold text-brand-text mr-2">Tags:</span>
            {blog.tags.map((tag) => (
              <span key={tag.id} className="px-3 py-1 bg-brand-light text-brand-cobalt text-sm rounded-full font-medium">
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
          <span className="font-serif font-bold text-xl text-brand-text">Share this article</span>
          <div className="flex space-x-4">
            <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt hover:bg-brand-mulberry hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt hover:bg-brand-mulberry hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt hover:bg-brand-mulberry hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-cobalt hover:bg-brand-mulberry hover:text-white transition-colors">
              <LinkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
