import type React from "react"
import "@/app/globals.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ConstructionBanner from "@/components/construction-banner"
import ChangeNotificationPopup from "@/components/change-notification-popup"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata = {
  title: "One Breath Ahead - Non-Profit Organization",
  description: "We teach life-saving skills to empower communities and save lives.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar key={new Date().getTime()} />
            <ConstructionBanner />
            {children}
            <Footer />
            <ChangeNotificationPopup />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
