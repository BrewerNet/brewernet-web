import { ReactNode } from 'react'

export interface PageProps {}

export interface ContainerProps {
  children: ReactNode
}

export interface TypographyProps extends ContainerProps {
  classname?: string
}
