import React from 'react'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'
import { TypographyH3 } from '@/components/shared/Typography/Typography'

interface IntroSectionProps {
  content: string
  icons: Array<{
    src: string
    alt: string
  }>
}

const IntroSection: React.FC<IntroSectionProps> = ({ content, icons, link, href }) => {
  return (
    <div className='w-full flex flex-col-reverse md:flex-row md:py-20 py-20 md:px-20 px-5 gap-10'>
      <div className='flex md:min-h-[600px] md:w-1/2 flex-col justify-center gap-20'>
        <p className='font-sub items-center md:text-2xl md:tracking-wider md:leading-10 text-xl'>{content}</p>
        <Link className='hover:text-main md:self-start self-center' href={href}>
          <TypographyH3 className='w-full flex border-b-2 border-black hover:border-main'>
            {link} <GoArrowUpRight className='ml-1 my-auto' />
          </TypographyH3>
        </Link>
      </div>
      <div className='flex flex-row justify-evenly md:flex-1 md:flex md:flex-col md:justify-center md:items-center'>
        {icons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} className='md:mb-10 w-[30px] md:w-[100px]' />
        ))}
      </div>
    </div>
  )
}

export default IntroSection
