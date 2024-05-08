import React from 'react'

import { TypographyProps } from '@/lib/interfaces'

export const TypographyH1: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-main scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className || ''}`
  return <h1 className={combinedClassName}>{children}</h1>
}

export const TypographyH2: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-main scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className || ''}`
  return <h2 className={combinedClassName}>{children}</h2>
}

export const TypographyH3: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-display scroll-m-20 text-2xl font-semibold tracking-tight ${className || ''}`
  return <h3 className={combinedClassName}>{children}</h3>
}

export const TypographyH4: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-main scroll-m-20 text-xl font-semibold tracking-tight ${className || ''}`
  return <h4 className={combinedClassName}>{children}</h4>
}

export const TypographyParagraph: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-sub leading-7 [&:not(:first-child)]:mt-6 ${className || ''}`
  return <p className={combinedClassName}>{children}</p>
}

export const TypographyBlockquote: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-display mt-6 border-l-2 pl-6 italic ${className || ''}`
  return <blockquote className={combinedClassName}>{children}</blockquote>
}

export const TypographyCode: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-sans relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className || ''}`
  return <code className={combinedClassName}>{children}</code>
}

export const TypographyLead: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-sans text-xl text-muted-foreground ${className || ''}`
  return <p className={combinedClassName}>{children}</p>
}

export const TypographyLarge: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-sans text-lg font-semibold ${className || ''}`
  return <div className={combinedClassName}>{children}</div>
}

export const TypographySmall: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-main text-sm font-medium leading-none ${className || ''}`
  return <small className={combinedClassName}>{children}</small>
}

export const TypographyMute: React.FC<TypographyProps> = ({ children, className }) => {
  const combinedClassName = `font-sans text-sm text-muted-foreground ${className || ''}`
  return <p className={combinedClassName}>{children}</p>
}
