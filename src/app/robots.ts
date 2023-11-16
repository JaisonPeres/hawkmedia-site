import { SiteStages } from '@/hooks/types';
import useSite from '@/hooks/useSite';
import { MetadataRoute } from 'next';
 
export default async function robots(): Promise<MetadataRoute.Robots> {

  const host = useSite.host()

  const { pages, stage } = await useSite.fetchSite()

  if (stage === SiteStages.DEV) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
        crawlDelay: 10,
      },
    }
  }

  const disallowedPages = pages
    .filter(page => page.disallowedRobots)
    .map(page => `/${page.path}/`)

  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowedPages,
      },
      {
        userAgent: 'DuckDuckBot',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: disallowedPages,
      },
    ],
    sitemap: `https://${host}/sitemap.xml`,
  };
}