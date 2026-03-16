import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default async function BlogsManagementPage() {
  const blogs = await prisma.blog.findMany({
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { views: true } } },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif font-bold text-brand-text">Manage Blogs</h1>
        <Link
          href="/dashboard/blogs/new"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand-mulberry rounded-lg hover:bg-brand-mulberry/90 transition-colors shadow-sm"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Blog
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-sm text-gray-500 font-medium">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Views</th>
                <th className="px-6 py-4">Created Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-brand-text line-clamp-1">{blog.title}</div>
                    <div className="text-sm text-gray-500">{blog.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      blog.status === 'PUBLISHED' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="mr-1.5 h-4 w-4 text-gray-400" />
                      {blog._count.views}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/dashboard/blogs/edit/${blog.id}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-brand-cobalt hover:bg-blue-50 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No blogs found. Create your first blog post!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
