# AI-ED Website Plan

## Overview

AI-ED is a community platform for AI enthusiasts and practitioners. It combines an AI-focused blogging platform, personal profiles with resume/portfolio support, and a space for collaborative AI project discussions.

---

## Goals

- Provide a dedicated space for AI-focused blogging and knowledge sharing
- Allow individuals to showcase their profile, skills, experience, and resume
- Enable community-driven AI project discussions and collaboration

---

## Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR/SSG, file-based routing, excellent SEO for blogs |
| Styling | Tailwind CSS | Rapid UI development, consistent design system |
| Language | TypeScript | Type safety across frontend and backend |
| Database | PostgreSQL (via Supabase or Neon) | Relational data fits users/posts/projects well |
| Auth | NextAuth.js or Supabase Auth | OAuth (GitHub/Google) + email/password login |
| File Storage | Supabase Storage or AWS S3 | Resume PDF uploads and profile image hosting |
| Deployment | Vercel | Native Next.js support, CI/CD out of the box |

---

## Site Architecture

### Page Routes

```
/                          → Landing page (hero, features, recent posts, CTAs)
/blog                      → Blog listing (all posts, filterable by tag/category)
/blog/[slug]               → Individual blog post with author metadata
/blog/new                  → Create new blog post (authentication required)
/profile/[username]        → Public profile: bio, skills, experience, resume download
/profile/edit              → Edit own profile (authentication required)
/projects                  → AI project discussion board
/projects/[id]             → Project thread with comments and replies
/projects/new              → Start a new project discussion (authentication required)
/auth/login                → Login page
/auth/signup               → Signup / registration page
```

---

## Data Models

### User
```
id              UUID (primary key)
username        String (unique)
email           String (unique)
avatar_url      String (URL)
bio             Text
headline        String (e.g. "ML Engineer at Acme")
location        String
website         String (URL)
resume_url      String (PDF upload URL)
skills          String[] (array of skill tags)
social_links    JSON { github, linkedin, twitter, ... }
created_at      Timestamp
```

### Experience (linked to User)
```
id              UUID
user_id         UUID (foreign key → User)
title           String (e.g. "Software Engineer")
organization    String (e.g. "Google")
start_date      Date
end_date        Date (nullable — null means "present")
description     Text
```

### Education (linked to User)
```
id              UUID
user_id         UUID (foreign key → User)
degree          String (e.g. "B.Sc. Computer Science")
institution     String
start_date      Date
end_date        Date
description     Text
```

### BlogPost
```
id              UUID
slug            String (unique, URL-friendly)
title           String
content         Text (Markdown)
tags            String[]
author_id       UUID (foreign key → User)
published_at    Timestamp
cover_image_url String (URL, nullable)
read_time_mins  Integer (computed from content length)
```

### Project
```
id              UUID
title           String
description     Text
tags            String[]
author_id       UUID (foreign key → User)
status          Enum: open | closed | in_progress
created_at      Timestamp
updated_at      Timestamp
```

### Comment
```
id              UUID
body            Text
author_id       UUID (foreign key → User)
parent_id       UUID (nullable — for threaded replies)
target_type     Enum: blog | project
target_id       UUID (ID of the blog post or project)
created_at      Timestamp
```

---

## Shared UI Components

| Component | Description |
|---|---|
| `Navbar` | Responsive navigation with auth state (login button or user avatar/menu) |
| `Footer` | Site links, social links, copyright |
| `BlogCard` | Card showing post title, author, date, tags, and estimated read time |
| `ProjectCard` | Card showing project title, status badge, reply count, and tags |
| `ProfileHeader` | Avatar, name, headline, location, and resume download button |
| `MarkdownEditor` | Rich text / markdown editor for blog post creation |
| `TagBadge` | Reusable pill component for rendering tags and categories |
| `CommentThread` | Nested comment display with reply support |
| `AuthGuard` | HOC / wrapper to protect routes requiring authentication |

---

## Feature Phases

### Phase 1 — Core (MVP)
- [ ] User authentication: sign up, log in, OAuth (GitHub / Google)
- [ ] User profile page: bio, headline, skills, experience, education, resume download
- [ ] Blog: create, list, and read posts with Markdown rendering
- [ ] Project discussions: create thread and add replies

### Phase 2 — Engagement
- [ ] Tag-based filtering on blog posts and project discussions
- [ ] Full-text search across posts and projects
- [ ] Like and bookmark posts
- [ ] Follow other users and activity feed

### Phase 3 — Polish
- [ ] Email notifications (new comment, new follower)
- [ ] Admin moderation dashboard
- [ ] SEO optimization (Open Graph tags, XML sitemaps, structured data)
- [ ] Analytics: views per post, profile visits

---

## Security Considerations

- All write operations (create post, comment, edit profile) require authentication
- Resume and image uploads: validate file type and maximum file size server-side before storing
- Rate limiting on post and comment creation to prevent spam
- Sanitize Markdown output before rendering to prevent XSS attacks
- Use HTTPS everywhere; store only hashed passwords (handled by auth provider)
- CSRF protection on all form submissions

---

## Folder Structure (Next.js App Router)

```
ai-ed/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer)
│   ├── page.tsx                # Landing page
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   ├── new/page.tsx        # Create post
│   │   └── [slug]/page.tsx     # Individual post
│   ├── profile/
│   │   ├── edit/page.tsx       # Edit profile
│   │   └── [username]/page.tsx # Public profile
│   ├── projects/
│   │   ├── page.tsx            # Project listing
│   │   ├── new/page.tsx        # Create project
│   │   └── [id]/page.tsx       # Project thread
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
│   ├── db.ts                   # Database client
│   ├── auth.ts                 # Auth configuration
│   └── storage.ts              # File upload helpers
├── types/
│   └── index.ts                # Shared TypeScript interfaces
├── public/                     # Static assets
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Development Workflow

1. Set up project: `npx create-next-app@latest ai-ed --typescript --tailwind --app`
2. Configure database (Supabase or Neon) and run initial migrations
3. Configure authentication provider (NextAuth.js or Supabase Auth)
4. Configure file storage for resume/image uploads
5. Build pages phase by phase, starting with Phase 1 (MVP)
6. Deploy to Vercel and connect custom domain

---

*Document version: 1.0 — 2026-03-15*
