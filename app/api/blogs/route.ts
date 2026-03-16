import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const blogSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  content: z.string().min(1),
  excerpt: z.string().optional(),
  featuredImage: z.string().optional(),
  status: z.enum(['DRAFT', 'PUBLISHED']),
  categoryId: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = blogSchema.parse(body);

    // Get the admin user (in a real app, get from session)
    const admin = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
    
    if (!admin) {
      return NextResponse.json({ error: 'Admin user not found' }, { status: 500 });
    }

    const blog = await prisma.blog.create({
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt,
        status: data.status,
        featuredImage: data.featuredImage || null,
        categoryId: data.categoryId || null,
        authorId: admin.id,
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error('Failed to create blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}
