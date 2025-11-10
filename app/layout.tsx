import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Calidad de Software | ISO/IEC 25010",
  description: "Guía completa sobre calidad de software, estándares de programación, métricas, pruebas y DevOps",
  generator: "https://github.com/andersonazd",
  icons: {
    icon: [
      {
        url: "/favicon (1).co",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon (2).co",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
