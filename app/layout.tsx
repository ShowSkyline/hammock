import type { Metadata } from "next"
    import { Playfair_Display, Inter } from 'next/font/google'
    import "./globals.css"
    import Header from './components/Header'
    import Footer from './components/Footer'

    const playfair = Playfair_Display({ subsets: ["latin"] })
    const inter = Inter({ subsets: ["latin"] })

    export const metadata: Metadata = {
      title: "4rooms.ai - Luxury Accommodations for Elite Trade Shows",
      description: "AI-powered premium room booking platform for exclusive trade shows and events",
    }

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en" className="dark">
          <body className={`${inter.className} bg-gray-950 text-gray-200`}>
            <Header />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </body>
        </html>
      )
    }
