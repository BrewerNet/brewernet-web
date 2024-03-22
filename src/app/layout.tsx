import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Root } from "postcss"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const RootLayout = ({ children }:{children: ReactNode}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
export default RootLayout
