import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tailwind-next',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid h-screen min-h-screen grid-cols-app ">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2">{children}</main>
        </div>
      </body>
    </html>
  )
}
