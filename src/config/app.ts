export const app = {
  isLocal: process.env.STAGE === 'local',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  localSite: process.env.LOCAL_SITE || 'http://localhost:3000',
  revalidateSeconds: parseInt(process.env.REVALIDATE_SECONDS || '0') || 30,
  gtagId: process.env.GTAG_ID || '123',
}