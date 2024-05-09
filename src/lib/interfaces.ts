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
  children: React.ReactNode;
  link: string; 
  className?: string; 
}

export interface HeaderSectionProps {
  headerText: string;
  subHeaderText1: string;
  subHeaderText2: string;
  paragraphText: string;
  buttons?: React.ReactNode[];
}

export interface TitleSectionProps {
  imgSrc: string;
  imgAlt: string;
  titlePart1: string;
  titlePart2: string;
  paragraphText: string;
}

export interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface IntroSectionProps {
  content: string
  icons: Array<{
    src: string
    alt: string
  }>
  link: string
  href: string
}
