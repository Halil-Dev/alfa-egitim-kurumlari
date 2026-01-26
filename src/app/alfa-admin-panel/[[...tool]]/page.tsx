'use client'

/**
 * Bu rota, Sanity Studio'nun yerleşik yazma ortamından sorumludur.
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

// Metadata ve viewport'u client bileşeninde doğrudan export edemediğimiz için 
// eğer gerekirse bunları ayrı bir layout dosyasında tutmak daha sağlıklıdır.
// Şimdilik sadece Studio'nun çalışmasına odaklanıyoruz.

export default function StudioPage() {
  return (
    <div className="min-h-screen">
      <NextStudio config={config} />
    </div>
  )
}