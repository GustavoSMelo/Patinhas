import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Patinhas',
  description: 'Crie e compartilhe momentos unicos com seu pet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <link rel='icon' href='/images/iconcat.png' />
        </head>
        <body className={inter.className}>
            {children}
        </body>
    </html>
  )
}
