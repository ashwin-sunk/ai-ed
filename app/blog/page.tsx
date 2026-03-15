import BlogCard from "@/components/BlogCard";
import { SAMPLE_POSTS } from "@/lib/data";
import Link from "next/link";

const ALL_TAGS = Array.from(new Set(SAMPLE_POSTS.flatMap((p) => p.tags)));

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Blog</h1>
          <p className="text-slate-500 mt-1">
            In-depth articles on AI, ML, LLMs, and more
          </p>
        </div>
        <Link
          href="/blog/new"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
        >
          + Write Post
        </Link>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-medium cursor-pointer">
          All
        </span>
        {ALL_TAGS.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700 px-3 py-1 rounded-full font-medium cursor-pointer transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_POSTS.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
