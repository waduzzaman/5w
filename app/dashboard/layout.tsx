import Link from 'next/link';
import { LayoutDashboard, FileText, BarChart2, LogOut } from 'lucide-react';
import { auth, signOut } from '@/lib/auth';
import { redirect } from 'next/navigation';

// Authorized emails - only these emails can access the dashboard
const AUTHORIZED_EMAILS = [
  "info@5wcommunications.com",
  // Add more authorized emails here
]

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  if (!session) {
    redirect('/api/auth/signin');
  }
  
  // Check if user's email is authorized
  const userEmail = (session.user as { email?: string })?.email?.toLowerCase();
  if (!userEmail || !AUTHORIZED_EMAILS.includes(userEmail)) {
    // User is signed in but not authorized - redirect to home with error
    return (
      <div className="flex h-screen bg-gray-50 items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You are not authorized to access this dashboard.</p>
          <form action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}>
            <button type="submit" className="px-4 py-2 bg-brand-mulberry text-white rounded-lg">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-text text-white flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-gray-800">
          <Link href="/" className="font-serif text-xl font-bold text-white">
            5W <span className="text-brand-mulberry">CMS</span>
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            <LayoutDashboard className="mr-3 h-5 w-5 text-gray-400" />
            Overview
          </Link>
          <Link href="/dashboard/blogs" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            <FileText className="mr-3 h-5 w-5 text-gray-400" />
            Blogs
          </Link>
          <Link href="/dashboard/analytics" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors">
            <BarChart2 className="mr-3 h-5 w-5 text-gray-400" />
            Analytics
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-800">
          <form action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}>
            <button type="submit" className="flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </button>
          </form>
          <Link href="/" className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white mt-2">
            <LogOut className="mr-3 h-5 w-5" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
