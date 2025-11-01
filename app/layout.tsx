import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Events Calendar - Keshav Gore Smarak Trust',
  description: 'Join us in our activities and be a part of the change.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans text-dark bg-gray-50">{children}</body>
    </html>
  )
}

