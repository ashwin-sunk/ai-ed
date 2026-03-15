import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">AI-ED 101</h3>
            <p className="text-sm leading-relaxed">
              A community platform for AI enthusiasts to share knowledge, showcase work, and collaborate on projects.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">AI Blog</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Discussions</Link></li>
              <li><Link href="/profile/demo" className="hover:text-white transition-colors">Profiles</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Topics</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog?tag=llm" className="hover:text-white transition-colors">Large Language Models</Link></li>
              <li><Link href="/blog?tag=ml" className="hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link href="/blog?tag=agents" className="hover:text-white transition-colors">AI Agents</Link></li>
              <li><Link href="/blog?tag=ethics" className="hover:text-white transition-colors">AI Ethics</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-sm text-center">
          © {new Date().getFullYear()} AI-ED 101. Built for the AI community.
        </div>
      </div>
    </footer>
  );
}
