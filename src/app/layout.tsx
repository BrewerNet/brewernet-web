import { ReactNode } from 'react'

import './globals.css'

import Navbar from '../components/shared/Navbar/Navbar'
import Providers from './Providers'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <html lang='en'>
        <body>
          <Navbar />
          <div>{children}</div>
        </body>
      </html>
    </Providers>
  )
}
export default RootLayout
