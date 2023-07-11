'use client'
import { MUIProvider } from '@/providers'

export const metadata = {
  title: 'TOSKA | Login',
  description: 'The Most Powerfull Cashier App',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MUIProvider>{children}</MUIProvider>
      </body>
    </html>
  )
}
