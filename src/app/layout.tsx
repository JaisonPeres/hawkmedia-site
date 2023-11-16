import GoogleAnalytics from '@/components/modules/analytics/GoogleAnalytics'
import { app } from '@/config'
import { SiteLanguages } from '@/hooks/types'
import useMetadata from '@/hooks/useMetadata'
import { PageOnNav } from '@/hooks/useSite'
import { Inter } from 'next/font/google'
import SiteHeader from '../components/basic/SiteHeader'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  return await useMetadata.getSiteMetadata()
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const site = await useSite.fetchSite()
  const navigation: PageOnNav[] = [
    { title: 'Home', path: '/' },
    { title: 'Serviços', path: 'servicos' },
    { title: 'Sobre', path: 'sobre' },
    { title: 'Contato', path: 'contato' },
  ]

  const siteTitle = 'Hawk Media'

  return (
    <html lang={SiteLanguages.PT}>
      <body className={inter.className}>
        <GoogleAnalytics gtagId={app.gtagId} />
        <SiteHeader navigation={navigation} title={siteTitle} />
        <div className="relative isolate bg-gray-100 dark:bg-gray-950" style={{minHeight: '100vh'}}>
          <div className="relative isolate px-6 pt-24 lg:px-8">
            {children}
          </div>
        </div>
      </body>
      {/* <link rel="icon" type="image/png" sizes="32x32" href={site.brandIcon} /> */}
    </html>
  )
}
