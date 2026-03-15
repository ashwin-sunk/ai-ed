import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { SAMPLE_POSTS, SAMPLE_PROJECTS } from "@/lib/data";

export default function Home() {
  const featuredPosts = SAMPLE_POSTS.slice(0, 3);
  const featuredProjects = SAMPLE_PROJECTS.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-700/50 text-blue-200 text-sm font-medium px-3 py-1 rounded-full mb-6">
            AI Education &amp; Community
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Learn, Share &amp; Build{" "}
            <span className="text-blue-300">AI Together</span>
          </h1>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            A platform for AI enthusiasts to publish blogs, showcase their
            profiles and resumes, and collaborate on AI project discussions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Read the Blog
            </Link>
            <Link
              href="/projects"
              className="border border-white/40 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Blog Posts", value: "120+" },
            { label: "AI Projects", value: "45+" },
            { label: "Community Members", value: "800+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-blue-600">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Everything You Need for AI Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "✍️",
                title: "AI Blog",
                description:
                  "Publish in-depth articles on LLMs, ML, AI agents, ethics, and more. Share your knowledge with the community.",
                href: "/blog",
                cta: "Browse Posts",
              },
              {
                emoji: "👤",
                title: "Profile & Resume",
                description:
                  "Showcase your AI skills, work experience, and projects. Build your professional AI portfolio.",
                href: "/profile/demo",
                cta: "View Profiles",
              },
              {
                emoji: "💬",
                title: "Project Discussions",
                description:
                  "Share your AI projects, get feedback, find collaborators, and learn from community experiences.",
                href: "/projects",
                cta: "Join Discussions",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  {feature.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Recent Blog Posts</h2>
            <Link href="/blog" className="text-blue-600 text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Active Projects */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Active Project Discussions</h2>
            <Link href="/projects" className="text-blue-600 text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{project.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 mb-1 hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-3">{project.description}</p>
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-slate-400 ml-auto">{project.replies} replies</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to share your AI knowledge?</h2>
        <p className="text-blue-100 mb-8 text-lg">
          Join a growing community of AI practitioners and researchers.
        </p>
        <Link
          href="/blog/new"
          className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-block"
        >
          Write Your First Post
        </Link>
      </section>
    </div>
  );
}
