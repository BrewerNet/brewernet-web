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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
export default RootLayout
