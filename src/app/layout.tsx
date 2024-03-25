import { ReactNode } from 'react'

import './globals.css'

import Navbar from './Navbar/Navbar'
import Providers from './Providers'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <Providers>
        <div>
          <Navbar />
          <body>{children}</body>
        </div>
      </Providers>
    </html>
  )
}
export default RootLayout
