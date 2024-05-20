import Image from 'next/image'
import React from 'react'

import { TitleSectionProps } from '@/lib/interfaces'

import { TypographyH3, TypographySmall } from '@/components/shared/Typography/Typography'

const TitleSection: React.FC<TitleSectionProps> = ({ imgSrc, imgAlt, titlePart1, titlePart2, paragraphText }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 justify-between'>
      <div className='flex gap-10 self-center'>
        <Image src={imgSrc} alt={imgAlt} width={100} height={100} className='w-[100px] h-[100px]' />
        <div className='self-center md:self-end'>
          <TypographyH3 className='text-sub'>{titlePart1}</TypographyH3>
          <TypographyH3 className='text-sub'>{titlePart2}</TypographyH3>
        </div>
      </div>
      <TypographySmall className='text-white self-center lg:self-end flex text-center'>{paragraphText}</TypographySmall>
    </div>
  )
}

export default TitleSection
