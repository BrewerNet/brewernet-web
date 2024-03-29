import { ReactNode } from 'react'

import './globals.css'

import Footer from '@/components/shared/Footer'

import Providers from './Providers'
import Navbar from '../components/shared/Navbar/Navbar'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <html lang='en'>
        <body>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
export default RootLayout
