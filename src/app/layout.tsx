import { ReactNode } from 'react'

import './globals.css'

import Providers from './Providers'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
export default RootLayout
