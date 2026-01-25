'use client'

/**
 * Bu yapılandırma, `\src\app\alfa-admin-panel\[[...tool]]\page.tsx` rotasına monte edilen 
 * Sanity Studio için kullanılır.
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Import yollarını @/ kullanarak güncelledik (Hata almanı önler)
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schemaTypes'
import { structure } from '@/sanity/structure'

export default defineConfig({
  basePath: '/alfa-admin-panel',
  projectId,
  dataset,
  // schemaTypes/index.ts içindeki 'schema' objesini buraya bağlıyoruz
  schema: schema, 
  plugins: [
    structureTool({ structure }),
    // Vision, Studio içinden sorgu (GROQ) yapmanı sağlar
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})