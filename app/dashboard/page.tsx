import { prisma } from '@/lib/prisma';
import { FileText, Eye, Users, TrendingUp } from 'lucide-react';

export default async function DashboardOverview() {
  const totalBlogs = await prisma.blog.count();
  const publishedBlogs = await prisma.blog.count({ where: { status: 'PUBLISHED' } });
  const draftBlogs = await prisma.blog.count({ where: { status: 'DRAFT' } });
  const totalViews = await prisma.blogView.count();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-serif font-bold text-brand-text">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Blogs</p>
            <p className="text-2xl font-bold text-brand-text">{totalBlogs}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Published</p>
            <p className="text-2xl font-bold text-brand-text">{publishedBlogs}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mr-4">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Drafts</p>
            <p className="text-2xl font-bold text-brand-text">{draftBlogs}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
            <Eye className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Views</p>
            <p className="text-2xl font-bold text-brand-text">{totalViews}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-serif font-bold text-brand-text mb-6">Recent Activity</h2>
        <p className="text-gray-500">No recent activity to display.</p>
      </div>
    </div>
  );
}
