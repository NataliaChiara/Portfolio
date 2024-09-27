'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function GoogleAnalytics() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date())
      gtag('config', 'G-CE10VPNW4N')
    }
  }, [])

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CE10VPNW4N"
        strategy="afterInteractive"
      />
    </>
  )
}
