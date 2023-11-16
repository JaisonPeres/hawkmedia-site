import { MetadataRoute } from 'next';
import { app } from '@/config'

 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = `https://${app.host}`

  const pages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date().toISOString(),
    },
  ]

  return pages
}