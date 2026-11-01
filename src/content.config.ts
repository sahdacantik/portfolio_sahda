import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      category: z.enum(['Frontend', 'Full Stack', 'AI & Mobile']),
      context: z.string(),
      // Featured projects appear large on the home page, sorted by `order`.
      featured: z.boolean().default(false),
      order: z.number(),
      role: z.string(),
      stack: z.array(z.string()),
      features: z.array(z.string()),
      outcome: z.array(z.string()),
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      device: z.enum(['browser', 'phone']).default('browser'),
      // Drawn in CSS for projects that have no public screenshot.
      visual: z.enum(['components', 'tokens']).optional(),
      links: z.object({ live: z.url().optional(), repo: z.url().optional() }).default({}),
    }),
});

export const collections = { projects };
