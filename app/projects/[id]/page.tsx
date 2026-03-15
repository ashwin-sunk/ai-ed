import { SAMPLE_PROJECTS } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SAMPLE_PROJECTS.map((p) => ({ id: p.id }));
}

const SAMPLE_REPLIES = [
  {
    id: 1,
    author: "Priya Sharma",
    authorUsername: "priya-s",
    date: "2 days ago",
    body: "Great project! Have you considered using a semantic similarity threshold to filter out low-confidence matches? We ran into the same issue and setting a cosine similarity cutoff of 0.75 helped a lot.",
  },
  {
    id: 2,
    author: "Carlos Mendes",
    authorUsername: "carlos-m",
    date: "1 day ago",
    body: "For the matching algorithm, I'd suggest looking into bi-encoder models like sentence-transformers. They're much faster than cross-encoders at inference time while still giving good results.",
  },
  {
    id: 3,
    author: "Ashwin Sunkara",
    authorUsername: "ashwin-sunk",
    date: "12 hours ago",
    body: "Thanks everyone! Tried the cosine threshold approach — it reduced false positives by ~30%. Will experiment with bi-encoders next.",
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = SAMPLE_PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/projects" className="hover:text-blue-600">Projects</Link>{" "}
        / <span className="text-slate-600">{project.title}</span>
      </nav>

      {/* Project header */}
      <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{project.emoji}</div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h1>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <Link
                href={`/profile/${project.authorUsername}`}
                className="font-medium text-slate-700 hover:text-blue-600"
              >
                {project.author}
              </Link>
              <span>·</span>
              <span>{project.date}</span>
            </div>
            <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Replies */}
      <h2 className="text-lg font-bold text-slate-900 mb-4">
        {project.replies} Replies
      </h2>

      <div className="space-y-4 mb-8">
        {SAMPLE_REPLIES.map((reply) => (
          <div key={reply.id} className="bg-white rounded-xl border border-slate-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                {reply.author[0]}
              </span>
              <Link
                href={`/profile/${reply.authorUsername}`}
                className="font-semibold text-slate-800 text-sm hover:text-blue-600"
              >
                {reply.author}
              </Link>
              <span className="text-xs text-slate-400">{reply.date}</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{reply.body}</p>
          </div>
        ))}
      </div>

      {/* Reply box */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="font-semibold text-slate-800 mb-3">Add a Reply</h3>
        <textarea
          rows={4}
          placeholder="Share your thoughts, feedback, or suggestions..."
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-3"
        />
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
          Post Reply
        </button>
      </div>
    </div>
  );
}
