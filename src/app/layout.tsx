'use client'
import { MUIProvider } from '@/providers'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MUIProvider>{children}</MUIProvider>
      </body>
    </html>
  )
}
