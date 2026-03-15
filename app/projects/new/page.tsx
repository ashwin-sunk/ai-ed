"use client";

export default function NewProjectPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Start a Project Discussion</h1>
      <p className="text-slate-500 mb-8">Share your AI project and get community feedback</p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Project Title</label>
          <input
            type="text"
            placeholder="e.g. AI-powered customer support chatbot"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Tags</label>
          <input
            type="text"
            placeholder="e.g. RAG, Chatbot, Production"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Description</label>
          <textarea
            rows={6}
            placeholder="Describe your project, what you're working on, and what kind of feedback or help you're looking for..."
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            GitHub / Demo URL (optional)
          </label>
          <input
            type="url"
            placeholder="https://github.com/..."
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Discussion
          </button>
          <button
            type="button"
            className="border border-slate-300 text-slate-600 px-6 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
