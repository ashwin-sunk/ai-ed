import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <div className="text-6xl mb-6">🤔</div>
      <h2 className="text-2xl font-bold text-slate-900 mb-3">Page Not Found</h2>
      <p className="text-slate-500 mb-8">
        The page you&apos;re looking for doesn&apos;t exist yet.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
