import React from 'react'

import { ContainerProps } from '@/lib/interfaces'

const TitleWrapper: React.FC<ContainerProps> = ({ children }) => {
  return <div className='p-10 flex items-center justify-center'>{children}</div>
}

export default TitleWrapper
