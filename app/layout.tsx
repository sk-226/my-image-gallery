import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Image Gallery',
  description: 'A simple image gallery built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

