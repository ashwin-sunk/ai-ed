import { SAMPLE_POSTS } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return SAMPLE_POSTS.map((post) => ({ slug: post.slug }));
}

const POST_CONTENT: Record<string, string> = {
  "getting-started-with-llms": `
## What is a Large Language Model?

A Large Language Model (LLM) is a type of AI model trained on vast amounts of text data using a transformer architecture. Models like GPT-4, Claude, and Llama are examples of LLMs capable of understanding and generating human-like text.

## Key Concepts

### Tokenization
Before an LLM processes text, it breaks it into **tokens** — subword units. For example, "tokenization" might become ["token", "ization"]. Understanding tokenization helps you write better prompts.

\`\`\`python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokens = tokenizer("Hello, world!")
print(tokens)  # {'input_ids': [15496, 11, 995, 0], ...}
\`\`\`

### Prompt Engineering
The quality of an LLM's output depends heavily on the input prompt. Key strategies include:

- **Be specific** — vague prompts produce vague outputs
- **Provide context** — include relevant background information
- **Use examples** — few-shot prompting improves accuracy
- **Chain of thought** — ask the model to reason step by step

### Temperature and Sampling
Temperature controls randomness in generation. Lower values (0.1–0.3) produce more deterministic output; higher values (0.8–1.2) produce more creative responses.

## Getting Started with the API

\`\`\`python
import anthropic

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Explain transformers in simple terms."}]
)
print(message.content[0].text)
\`\`\`

## Next Steps

Once you're comfortable with basic LLM usage, explore:
- Fine-tuning models on custom datasets
- Building RAG pipelines for grounded responses
- Creating AI agents with tool use
`,
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = POST_CONTENT[slug];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-8">
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Blog
        </Link>{" "}
        / <span className="text-slate-600">{post.title}</span>
      </nav>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-200">
        <Link
          href={`/profile/${post.authorUsername}`}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
            {post.author[0]}
          </span>
          <div>
            <div className="font-semibold text-slate-800 text-sm">{post.author}</div>
            <div className="text-xs text-slate-400">
              {post.date} · {post.readTime}
            </div>
          </div>
        </Link>
      </div>

      {/* Cover emoji */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl h-48 flex items-center justify-center text-7xl mb-10">
        {post.coverEmoji ?? "🤖"}
      </div>

      {/* Content */}
      {content ? (
        <div className="prose-ai">
          {content.split("\n").map((line, i) => {
            if (line.startsWith("## "))
              return (
                <h2 key={i} className="text-2xl font-bold text-slate-900 mt-8 mb-3">
                  {line.replace("## ", "")}
                </h2>
              );
            if (line.startsWith("### "))
              return (
                <h3 key={i} className="text-lg font-semibold text-slate-800 mt-5 mb-2">
                  {line.replace("### ", "")}
                </h3>
              );
            if (line.startsWith("- "))
              return (
                <li key={i} className="text-slate-600 ml-4 mb-1">
                  {line.replace("- ", "")}
                </li>
              );
            if (line.startsWith("```"))
              return null;
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="text-slate-600 leading-relaxed mb-3">
                {line}
              </p>
            );
          })}
        </div>
      ) : (
        <div className="prose-ai">
          <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
          <p className="text-slate-400 italic mt-8">Full article coming soon...</p>
        </div>
      )}

      {/* Back */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <Link href="/blog" className="text-blue-600 font-medium hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
