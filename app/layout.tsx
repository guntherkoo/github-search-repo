import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitHub Repository Search',
  description: 'Gunther Koo | Avion Ray Take Home Assignment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-roboto">{children}</body>
    </html>
  )
}
