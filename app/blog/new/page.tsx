"use client";

export default function NewPostPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Write a New Post</h1>
      <p className="text-slate-500 mb-8">Share your AI knowledge with the community</p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Title
          </label>
          <input
            type="text"
            placeholder="e.g. Building RAG Pipelines with LangChain"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Tags (comma separated)
          </label>
          <input
            type="text"
            placeholder="e.g. LLM, RAG, Python"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Excerpt
          </label>
          <textarea
            rows={2}
            placeholder="A brief summary of your post (shown in listings)"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Content (Markdown supported)
          </label>
          <textarea
            rows={16}
            placeholder={`## Introduction\n\nStart writing your post here...\n\n## Key Concepts\n\n...`}
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-900 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Publish Post
          </button>
          <button
            type="button"
            className="border border-slate-300 text-slate-600 px-6 py-2.5 rounded-lg font-medium hover:bg-slate-50 transition-colors"
          >
            Save Draft
          </button>
        </div>
      </form>
    </div>
  );
}
