# AI-ED Website Plan

## Overview & Goals

AI-ED is an AI-focused community platform with three core pillars:

1. **AI Blogging** — Authors can write and publish blog posts about AI topics
2. **User Profiles with Resume** — Individuals can showcase their experience, skills, education, and downloadable resume
3. **AI Project Discussions** — Community space for discussing and collaborating on AI projects

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG, file-based routing, great SEO for blogs |
| Styling | Tailwind CSS | Rapid UI development, consistent design system |
| Language | TypeScript | Type safety across frontend + backend |
| Database | PostgreSQL (via Supabase or Neon) | Relational data fits users/posts/projects |
| Auth | NextAuth.js or Supabase Auth | OAuth (GitHub/Google) + email login |
| File Storage | Supabase Storage or AWS S3 | Resume PDF uploads, profile images |
| Deployment | Vercel | Native Next.js support, CI/CD out of the box |

---

## Site Architecture

```
/                          → Landing page (hero, stats, featured posts, CTAs)
/blog                      → Blog listing (all posts, filterable by tag)
/blog/[slug]               → Individual blog post with author + metadata
/blog/new                  → Create new blog post (auth required)
/profile/[username]        → Public profile: bio, skills, experience, resume download
/profile/edit              → Edit own profile (auth required)
/projects                  → AI project discussion board
/projects/[id]             → Project thread with comments
/projects/new              → Start new project discussion (auth required)
/auth/login                → Login page
/auth/signup               → Signup page
```

---

## Data Models

### User
| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `username` | string | Unique handle |
| `email` | string | Login email |
| `avatar_url` | string | Profile picture URL |
| `bio` | text | Short bio |
| `headline` | string | Professional headline |
| `location` | string | City, Country |
| `website` | string | Personal/portfolio URL |
| `resume_url` | string | PDF upload URL |
| `skills` | string[] | Array of skill tags |
| `social_links` | JSON | GitHub, LinkedIn, Twitter, etc. |

### Experience (linked to User)
| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `user_id` | UUID | FK → User |
| `title` | string | Job title |
| `organization` | string | Company/institution |
| `start_date` | date | Start date |
| `end_date` | date | End date (null if current) |
| `description` | text | Role description |

### Education (linked to User)
| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `user_id` | UUID | FK → User |
| `degree` | string | Degree/certification |
| `institution` | string | School/university |
| `start_date` | date | Start date |
| `end_date` | date | Graduation date |
| `field_of_study` | string | Major/discipline |

### BlogPost
| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `slug` | string | URL-friendly identifier |
| `title` | string | Post title |
| `content` | text | Markdown body |
| `tags` | string[] | Topic tags |
| `author_id` | UUID | FK → User |
| `published_at` | timestamp | Publish date |
| `cover_image_url` | string | Hero image |
| `read_time_minutes` | int | Estimated reading time |

### Project
| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `title` | string | Project title |
| `description` | text | Project summary |
| `tags` | string[] | Topic tags |
| `author_id` | UUID | FK → User |
| `created_at` | timestamp | Creation date |
| `status` | enum | `open` or `closed` |

### Comment
| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `body` | text | Comment content (markdown) |
| `author_id` | UUID | FK → User |
| `parent_id` | UUID | FK → Comment (threading) |
| `target_type` | enum | `blog` or `project` |
| `target_id` | UUID | FK → BlogPost or Project |
| `created_at` | timestamp | Post time |

---

## Shared UI Components

| Component | Description |
|---|---|
| `Navbar` | Responsive navigation with auth state (login/avatar/logout) |
| `Footer` | Site links, social media, copyright |
| `BlogCard` | Title, author, date, tags, estimated read time |
| `ProjectCard` | Title, status badge, reply count, tags |
| `ProfileHeader` | Avatar, name, headline, location, resume download button |
| `MarkdownEditor` | Rich text / markdown editor for blog post creation |
| `TagBadge` | Reusable colored pill for topic tags |
| `CommentThread` | Nested comment display with reply form |
| `AuthGuard` | HOC/wrapper to protect pages requiring authentication |

---

## Feature Phases

### Phase 1 — MVP (Core)
- [ ] User authentication (sign up, log in, OAuth via GitHub/Google)
- [ ] User profile page (bio, skills, resume download)
- [ ] Blog: create, list, and read posts (markdown support)
- [ ] Project discussions: create thread, add replies

### Phase 2 — Engagement
- [ ] Tag-based filtering on blog and projects pages
- [ ] Full-text search across posts and projects
- [ ] Like / bookmark blog posts
- [ ] Follow other users
- [ ] User activity feed

### Phase 3 — Polish
- [ ] Email notifications (new comment, new follower)
- [ ] Admin/moderation dashboard
- [ ] SEO optimization (OpenGraph tags, sitemaps, canonical URLs)
- [ ] Analytics (page views per post, profile visit count)
- [ ] Dark mode toggle

---

## Security Considerations

- All write operations (create post, comment, edit profile) require authentication
- Resume and image uploads: validate file type (PDF/image only) and file size server-side
- Rate limiting on post and comment creation to prevent spam
- Sanitize markdown output before rendering to prevent XSS attacks
- CSRF protection on all form submissions
- Signed URLs for private file storage access

---

## Folder Structure

```
ai-ed/
├── app/
│   ├── layout.tsx                  # Root layout (Navbar + Footer)
│   ├── page.tsx                    # Landing page
│   ├── blog/
│   │   ├── page.tsx                # Blog listing
│   │   ├── new/page.tsx            # Create blog post
│   │   └── [slug]/page.tsx         # Individual post
│   ├── profile/
│   │   ├── edit/page.tsx           # Edit own profile
│   │   └── [username]/page.tsx     # Public profile
│   ├── projects/
│   │   ├── page.tsx                # Project board
│   │   ├── new/page.tsx            # Create project discussion
│   │   └── [id]/page.tsx           # Project thread
│   └── auth/
│       ├── login/page.tsx
│       └── signup/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   ├── ProjectCard.tsx
│   ├── ProfileHeader.tsx
│   ├── MarkdownEditor.tsx
│   ├── TagBadge.tsx
│   └── CommentThread.tsx
├── lib/
│   ├── db.ts                       # Database client
│   ├── auth.ts                     # Auth helpers
│   └── storage.ts                  # File upload helpers
├── types/
│   └── index.ts                    # Shared TypeScript types
├── public/                         # Static assets
├── docs/
│   └── WEBSITE_PLAN.md             # This document
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Development Workflow

1. **Setup**: `npm install` → configure `.env.local` with DB URL, auth secrets, storage keys
2. **Database**: Run Supabase or connect to Neon → apply schema migrations
3. **Local dev**: `npm run dev` → http://localhost:3000
4. **Testing**: Unit tests with Jest, E2E with Playwright
5. **Deploy**: Push to `main` → Vercel auto-deploys

---

## References

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [NextAuth.js Docs](https://next-auth.js.org)
