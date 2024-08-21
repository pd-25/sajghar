'use client';

import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();
  const query = new URLSearchParams(window.location.search);
  const error = query.get('error') || 'Unknown error occurred';

  return (
    <div>
      <h1>Error</h1>
      <p>{error}</p>
      <button onClick={() => router.push('/admin/login')}>Go Back to Login</button>
    </div>
  );
}
