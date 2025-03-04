import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mailsorter.xyz'),
  title: {
    default: 'Email List Sorter Tool - Clean & Validate | MailSorter',
    template: '%s | MailSorter - Email List Sorting Solution'
  },
  description: 'Advanced email list tool: clean, validate, and optimize lists. Remove duplicates and ensure deliverability with our secure, browser-based solution.',
  keywords: [
    'email list sorter',
    'email list validator',
    'email sorting tool',
    'email list cleaner',
    'duplicate email remover',
    'email verification tool',
    'business email management',
    'email list optimization',
    'bulk email processor',
    'email format validation',
    'secure email processing',
    'local email validation'
  ],
  authors: [{ name: 'MailSorter', url: 'https://www.mailsorter.xyz' }],
  creator: 'MailSorter',
  publisher: 'MailSorter',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  alternates: {
    canonical: 'https://www.mailsorter.xyz',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.mailsorter.xyz',
    siteName: 'MailSorter',
    title: 'Email List Sorter Tool - Clean & Validate | MailSorter',
    description: 'Transform your email lists with our powerful sorting and validation tool. Sort, clean and validate your email lists securely in your browser.',
    images: [
      {
        url: 'https://www.mailsorter.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MailSorter - Professional Email List Sorting Tool',
        type: 'image/jpeg',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'notranslate': true
    },
  },
  verification: {
    google: 'google-site-verification=CfxbEhu-VS6UOnfEBwNuZ8qzSwknxasIt4iMP4YhBq0',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8161218394245302" 
          crossOrigin="anonymous" 
        />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="google-adsense-account" content="ca-pub-8161218394245302" />
      </head>
      <body className="min-h-screen">
        <Script id="schema-organization" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "MailSorter - Email List Sorting Tool",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web Browser",
              "description": "Professional email list sorting and validation tool. Our secure, browser-based solution helps businesses clean, sort and optimize their email lists.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "Email list sorting",
                "Email validation",
                "Duplicate removal",
                "Format cleaning",
                "Local processing",
                "Secure handling",
                "Multiple format support",
                "Business email detection"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "150"
              }
            }
          `}
        </Script>
        <Script id="schema-webpage" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "MailSorter - Email List Sorting Tool",
              "description": "Professional email list sorting, cleaning and validation tool",
              "publisher": {
                "@type": "Organization",
                "name": "MailSorter",
                "url": "https://www.mailsorter.xyz",
                "logo": "https://www.mailsorter.xyz/og-image.jpg"
              },
              "mainEntity": {
                "@type": "WebApplication",
                "name": "MailSorter - Email List Sorter",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web Browser",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}