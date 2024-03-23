import React from 'react'

import { TypographyProps } from '@/lib/interfaces'

export const TypographyH1: React.FC<TypographyProps> = ({ children }) => {
  return <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>{children}</h1>
}

export const TypographyH2: React.FC<TypographyProps> = ({ children }) => {
  return <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>{children}</h2>
}

export const TypographyH3: React.FC<TypographyProps> = ({ children }) => {
  return <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{children}</h3>
}

export const TypographyH4: React.FC<TypographyProps> = ({ children }) => {
  return <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>{children}</h4>
}

export const TypographyParagraph: React.FC<TypographyProps> = ({ children }) => {
  return <p className='leading-7 [&:not(:first-child)]:mt-6'>{children} </p>
}

export const TypographyBlockquote: React.FC<TypographyProps> = ({ children }) => {
  return <blockquote className='mt-6 border-l-2 pl-6 italic'>{children}</blockquote>
}

export const TypographyCode: React.FC<TypographyProps> = ({ children }) => {
  return <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>{children}</code>
}

export const TypographyLead: React.FC<TypographyProps> = ({ children }) => {
  return <p className='text-xl text-muted-foreground'>{children}</p>
}

export const TypographyLarge: React.FC<TypographyProps> = ({ children }) => {
  return <div className='text-lg font-semibold'>{children}</div>
}

export const TypographySmall: React.FC<TypographyProps> = ({ children }) => {
  return <small className='text-sm font-medium leading-none'>{children}</small>
}

export const TypographyMute: React.FC<TypographyProps> = ({ children }) => {
  return <p className='text-sm text-muted-foreground'>{children}</p>
}
