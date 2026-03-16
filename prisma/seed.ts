import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create an admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin@5wcommunications.com' },
    update: {},
    create: {
      email: 'admin@5wcommunications.com',
      name: 'Admin User',
      password: 'password123', // Note: In a real app, hash this!
      role: 'ADMIN',
    },
  });

  // Create categories
  const prCategory = await prisma.category.upsert({
    where: { slug: 'public-relations' },
    update: {},
    create: {
      name: 'Public Relations',
      slug: 'public-relations',
    },
  });

  const digitalCategory = await prisma.category.upsert({
    where: { slug: 'digital-marketing' },
    update: {},
    create: {
      name: 'Digital Marketing',
      slug: 'digital-marketing',
    },
  });

  // Create tags
  const strategyTag = await prisma.tag.upsert({
    where: { slug: 'strategy' },
    update: {},
    create: {
      name: 'Strategy',
      slug: 'strategy',
    },
  });

  const brandingTag = await prisma.tag.upsert({
    where: { slug: 'branding' },
    update: {},
    create: {
      name: 'Branding',
      slug: 'branding',
    },
  });

  // Create blogs
  await prisma.blog.upsert({
    where: { slug: 'the-future-of-pr' },
    update: {},
    create: {
      title: 'The Future of Public Relations in a Digital World',
      slug: 'the-future-of-pr',
      content: 'Public relations is evolving rapidly. With the rise of digital media, PR professionals must adapt to new platforms and strategies to effectively communicate their clients\' messages. This involves a shift from traditional media outreach to a more integrated approach that includes social media, content marketing, and influencer partnerships.\n\n## Key Trends\n\n1. **Data-Driven PR:** Using analytics to measure the impact of campaigns and refine strategies.\n2. **Authenticity:** Consumers demand transparency and genuine communication from brands.\n3. **Visual Storytelling:** Incorporating video and interactive content to engage audiences.',
      excerpt: 'Explore how digital transformation is reshaping the public relations landscape and what it means for brands.',
      status: 'PUBLISHED',
      authorId: admin.id,
      categoryId: prCategory.id,
      tags: {
        connect: [{ id: strategyTag.id }],
      },
      featuredImage: 'https://picsum.photos/seed/pr-future/800/600',
    },
  });

  await prisma.blog.upsert({
    where: { slug: 'building-a-strong-brand-identity' },
    update: {},
    create: {
      title: 'Building a Strong Brand Identity from Scratch',
      slug: 'building-a-strong-brand-identity',
      content: 'A strong brand identity is crucial for standing out in a crowded market. It goes beyond just a logo; it encompasses your brand\'s voice, values, and visual elements.\n\n### Steps to Build Your Brand\n\n- **Define Your Purpose:** Why does your brand exist?\n- **Know Your Audience:** Who are you trying to reach?\n- **Create Visual Guidelines:** Establish a consistent look and feel across all platforms.',
      excerpt: 'Learn the essential steps to create a memorable and impactful brand identity that resonates with your target audience.',
      status: 'PUBLISHED',
      authorId: admin.id,
      categoryId: digitalCategory.id,
      tags: {
        connect: [{ id: brandingTag.id }, { id: strategyTag.id }],
      },
      featuredImage: 'https://picsum.photos/seed/branding/800/600',
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
