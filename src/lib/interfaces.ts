import { ReactNode } from 'react'

export interface PageProps {}

export interface ContainerProps {
  children: ReactNode
}

export interface TypographyProps extends ContainerProps {
  classname?: string
}

export interface TypographyProps {
  children: React.ReactNode
  className?: string
}
