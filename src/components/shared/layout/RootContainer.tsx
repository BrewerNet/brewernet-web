import React, { ReactNode } from 'react'

const RootContainer = ({ children }: { children: ReactNode }) => {
  return <div className='max-w-[1440px] mx-auto'>{children}</div>
}

export default RootContainer
