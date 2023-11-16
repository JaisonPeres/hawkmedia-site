'use client'

import Script from "next/script"
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { pageview } from "./gtagHelper"

export interface GoogleAnalyticsProps {
  gtagId: string
}

export default function GoogleAnalytics ({
  gtagId: GA_MEASUREMENT_ID
}: GoogleAnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    const url = pathname + searchParams.toString()
    pageview(GA_MEASUREMENT_ID, url)
  }, [GA_MEASUREMENT_ID, pathname, searchParams])

  return (
    <>
      <Script strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
              'analytics_storage': 'denied'
          });
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
          });
          `,
        }}
      />
    </>
  )
}