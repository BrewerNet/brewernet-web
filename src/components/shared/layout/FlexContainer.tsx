import cx from 'classnames'
import React from 'react'

import { ContainerProps } from '@/lib/interfaces'

interface Props extends ContainerProps {
  classname?: string
}

export const FlexContainer: React.FC<Props> = ({ classname, children }) => {
  const containerStyle = cx(
    {
      ['flex items-center justify-center']: true
    },
    classname
  )

  return <div className={containerStyle}>{children}</div>
}
