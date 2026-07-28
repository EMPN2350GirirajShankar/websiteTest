---
title: Welcome to the MAQ Software blog
slug: welcome-to-the-maq-software-blog
date: 2026-07-28
author: MAQ Software
category: Company news
tags:
  - Announcements
excerpt: Our blog now lives in this repository. Every post is a Markdown file, edited in a rich-text editor and published as a normal Git commit.
image: ""
imageAlt: ""
featured: true
draft: false
---

## Why we moved

Blogger gave us a place to publish, but it fought our design system at every
turn. Fonts, spacing, and card layouts never quite matched the rest of the site.

Now every post is a Markdown file in `content/blog`, rendered with the same
tokens and components as the rest of maqsoftware.com.

## How publishing works

1. Open `/admin/` and sign in with GitHub.
2. Write the post in the rich-text editor.
3. Press **Save** — that becomes a commit.
4. The existing GitHub Actions workflow rebuilds and deploys the site.

There is no separate CMS server to run, patch, or pay for.

## What you can do

- **Create** a post and pick its URL slug
- **Edit** any published post
- **Delete** posts you no longer want
- **Upload images** straight into `public/images/uploads`
- Keep work-in-progress hidden with the **Draft** toggle
