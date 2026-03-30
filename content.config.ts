import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      // This defines the "schema" (the data structure)
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.string(),
        category: z.string().optional(),
        tags: z.array(z.string()).optional()
      })
    })
  }
})