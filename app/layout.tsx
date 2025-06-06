import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "TC Lottery - Win Big with Referral Code vCW7t38771 | Register Now",
    template: "%s | TC Lottery",
  },
  description:
    "Access your TC Lottery account easily at tclotteryvip.com. Login or register and explore exciting colour games, daily gift codes, and app download options. Use referral code vCW7t38771 for exclusive bonuses.",
  keywords: [
    "tc lottery",
    "vCW7t38771",
    "tc lottery login",
    "tc lottery registration",
    "tc lottery referral code",
    "tc lottery app",
    "tc lottery download",
    "tc lottery coupon",
    "tc lottery telegram",
    "tc lottery manager referral code",
    "tc lottery customer care",
    "tc lottery sign-up bonus",
    "tc lottery promo code",
    "tc lottery game download",
    "colour games",
    "daily gift codes",
    "lottery games",
    "casino games",
    "online lottery",
    "mobile lottery app",
    "lottery bonuses",
    "referral bonuses",
  ].join(", "),
  authors: [{ name: "TC Lottery" }],
  creator: "TC Lottery",
  publisher: "TC Lottery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tclotteryvip.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tclotteryvip.com",
    title: "TC Lottery Login & Registration Link – Join the Fun! - TC LOTTERY",
    description:
      "Login or register on TC Lottery and explore exciting colour games, daily gift codes, and app download options. Use referral code vCW7t38771 for exclusive bonuses.",
    siteName: "TC Lottery",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "TC Lottery - Win Big with Referral Code vCW7t38771",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TC Lottery Login & Registration Link – Join the Fun!",
    description:
      "Login or register on TC Lottery and explore exciting colour games, daily gift codes, and app download options. Use referral code vCW7t38771 for exclusive bonuses.",
    images: ["/favicon.ico"],
    creator: "@tclottery",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  other: {
    "referral-code": "vCW7t38771",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="apple-mobile-web-app-title" content="TC Lottery" />
        <meta name="application-name" content="TC Lottery" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tclotteryvip.com" />

        {/* Enhanced Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "TC Lottery",
                alternateName: "TC LOTTERY",
                url: "https://tclotteryvip.com",
                description:
                  "Login or register on TC Lottery and explore exciting colour games, daily gift codes, and app download options. Use referral code vCW7t38771 for exclusive bonuses.",
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://tclotteryvip.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                  {
                    "@type": "RegisterAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://tclotteryvip.com/register?ref=vCW7t38771",
                    },
                    description:
                      "Register on TC Lottery with referral code vCW7t38771",
                  },
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "TC Lottery",
                url: "https://tclotteryvip.com",
                logo: "https://tclotteryvip.com/favicon.ico",
                description:
                  "Premier online lottery platform offering exciting games and bonuses",
                sameAs: [
                  "https://t.me/systummearninig",
                  "https://facebook.com/tclottery",
                  "https://twitter.com/tclottery",
                  "https://instagram.com/tclottery",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  availableLanguage: ["English"],
                  url: "https://t.me/systummearninig",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "TC Lottery App",
                operatingSystem: ["Android", "iOS"],
                applicationCategory: "GameApplication",
                description:
                  "Download TC Lottery mobile app for exciting lottery games and bonuses",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                },
              },
            ]),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
