import { SiteStages } from '@/hooks/types';
import { MetadataRoute } from 'next';
import { app } from '@/config'
 
export default async function robots(): Promise<MetadataRoute.Robots> {


  if (app.stage === SiteStages.DEV || app.stage === SiteStages.LOCAL) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
        crawlDelay: 10,
      },
    }
  }

  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        disallow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `https://${app.host}/sitemap.xml`,
  };
}