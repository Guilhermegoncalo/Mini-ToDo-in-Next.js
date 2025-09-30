import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Mini ToDo App',
  description: 'App simples em Next.js + TypeScript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <header className="header">Mini ToDo App</header>
        <main className="container">{children}</main>
      </body>
    </html>
  )
}