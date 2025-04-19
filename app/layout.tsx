import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yasandu Imanjith',
  description: 'Im here to showcase my skills',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
