import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artisan Cafe - Premium Coffee Experience',
  description: 'Experience the finest coffee in a modern 3D interactive environment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
