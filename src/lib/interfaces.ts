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

export interface NavButtonProps {
  children: React.ReactNode
  link: string
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface HeaderSectionProps {
  headerText: string
  subHeaderText1: string
  subHeaderText2: React.ReactNode
  paragraphText: string
  buttons?: React.ReactNode[]
}

export interface TitleSectionProps {
  imgSrc: string
  imgAlt: string
  titlePart1: string
  titlePart2: string
  paragraphText: string
}

export interface SocialLinkProps {
  href: string
  children: React.ReactNode
}

export interface InfoCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export interface IntroSectionProps {
  content: React.ReactNode
  icons: Array<{
    src: string
    alt: string
  }>
  link: string
  href: string
}

export interface ContactInfoSectionProps {
  description: {
    [key: string]: {
      desc: string
      email: string
    }
  }
}
