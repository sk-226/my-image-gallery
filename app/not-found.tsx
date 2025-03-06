import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-3xl font-bold mb-4 text-black">404 - Page Not Found</h2>
      <p className="mb-6 text-gray-600">The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}