import { z, defineCollection } from "astro:content";

const lezioni = defineCollection({
  type: "content",
  schema: z.object({
    page_title: z.string(),
    search_code: z.string().optional(),
    description: z.string(),
    containsExamples: z.boolean().optional(),
    hidefromsearch: z.boolean().optional(),
    href: z.string(),
  }),
});

export const collections = {
  lezioni,
};
