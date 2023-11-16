import useSite from '@/hooks/useSite';
import { MetadataRoute } from 'next';

 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = useSite.host()
  const site = await useSite.fetchSite()
  const baseUrl = `https://${host}`

  return site.pages
    .filter((page) => !page.private)
    .map(page => ({
      url: `${baseUrl}/${page.path === '/' ? '' : page.path}`,
      lastModified: page.updatedAt || page.createdAt || new Date().toISOString(),
    }))
}