import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorUsername: string;
  date: string;
  readTime: string;
  tags: string[];
  coverEmoji?: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 hover:shadow-md transition-shadow overflow-hidden">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 h-32 flex items-center justify-center text-5xl">
        {post.coverEmoji ?? "🤖"}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-bold text-slate-900 text-lg mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <Link href={`/profile/${post.authorUsername}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
              {post.author[0]}
            </span>
            <span className="font-medium text-slate-600">{post.author}</span>
          </Link>
          <span>{post.date} · {post.readTime}</span>
        </div>
      </div>
    </article>
  );
}
