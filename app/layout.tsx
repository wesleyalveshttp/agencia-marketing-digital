import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AgênciaMax - Marketing Digital que Transforma",
  description:
    "Agência de marketing digital especializada em resultados. SEO, redes sociais, campanhas pagas e muito mais.",
  keywords: "marketing digital, SEO, redes sociais, campanhas pagas, agência",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
