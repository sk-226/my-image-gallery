import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Image Gallery',
  description: 'A simple image gallery built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}

