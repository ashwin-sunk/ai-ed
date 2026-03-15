import { SAMPLE_PROJECTS } from "@/lib/data";
import Link from "next/link";

const ALL_TAGS = Array.from(new Set(SAMPLE_PROJECTS.flatMap((p) => p.tags)));

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">AI Project Discussions</h1>
          <p className="text-slate-500 mt-1">
            Share projects, get feedback, and find collaborators
          </p>
        </div>
        <Link
          href="/projects/new"
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
        >
          + Start Discussion
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

      {/* Project list */}
      <div className="space-y-4">
        {SAMPLE_PROJECTS.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{project.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-bold text-slate-900 text-lg hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs text-slate-400 whitespace-nowrap flex-shrink-0">
                    {project.replies} replies
                  </span>
                </div>
                <p className="text-slate-500 text-sm mt-1 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="text-xs text-slate-400 ml-auto">
                    by{" "}
                    <span className="text-slate-600 font-medium hover:text-blue-600">
                      {project.author}
                    </span>{" "}
                    · {project.date}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
