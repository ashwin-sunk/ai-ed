import { DEMO_PROFILE } from "@/lib/data";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export function generateStaticParams() {
  return [{ username: "demo" }, { username: DEMO_PROFILE.username }];
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  // Use demo profile for any username in this static demo
  const profile = username === "demo" ? DEMO_PROFILE : DEMO_PROFILE;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Profile card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
              {profile.name[0]}
            </div>
            <h1 className="text-xl font-bold text-slate-900">{profile.name}</h1>
            <p className="text-slate-500 text-sm mt-1">@{profile.username}</p>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">{profile.bio}</p>
            <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm mt-3">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profile.location}
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <a
                href={`https://github.com/${profile.github}`}
                className="text-slate-500 hover:text-slate-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={`https://linkedin.com/in/${profile.linkedin}`}
                className="text-slate-500 hover:text-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Download Resume
            </button>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-slate-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-xl text-slate-900 mb-5">Experience</h2>
            <div className="space-y-6">
              {profile.experience.map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {exp.company[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{exp.title}</div>
                    <div className="text-sm text-blue-600 font-medium">{exp.company}</div>
                    <div className="text-xs text-slate-400 mt-0.5 mb-2">{exp.period}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="bg-white rounded-2xl border border-slate-200 p-6">
            <h2 className="font-bold text-xl text-slate-900 mb-5">Education</h2>
            <div className="space-y-4">
              {profile.education.map((edu, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 text-lg">
                    🎓
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{edu.degree}</div>
                    <div className="text-sm text-slate-500">{edu.institution}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{edu.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Posts */}
          {profile.posts.length > 0 && (
            <section>
              <h2 className="font-bold text-xl text-slate-900 mb-5">Blog Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {profile.projects.length > 0 && (
            <section>
              <h2 className="font-bold text-xl text-slate-900 mb-5">Projects</h2>
              <div className="space-y-3">
                {profile.projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{project.emoji}</span>
                      <div>
                        <div className="font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                          {project.title}
                        </div>
                        <p className="text-slate-500 text-sm mt-0.5 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
