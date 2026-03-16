'use client';

import Link from 'next/link';
import { ArrowRight, LogIn } from 'lucide-react';
import { useSession, signIn } from 'next-auth/react';

export function BlogDashboardButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-cobalt rounded-lg">
        Loading...
      </div>
    );
  }

  if (session) {
    return (
      <Link
        href="/dashboard"
        className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-cobalt rounded-lg hover:bg-brand-cobalt/90 transition-colors"
      >
        Blog Dashboard
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    );
  }

  return (
    <button
      onClick={() => signIn('google')}
      className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-brand-cobalt rounded-lg hover:bg-brand-cobalt/90 transition-colors"
    >
      <LogIn className="mr-2 h-4 w-4" />
      Login to Manage
    </button>
  );
}
