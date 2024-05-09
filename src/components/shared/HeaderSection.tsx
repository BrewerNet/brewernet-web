import React from 'react'

import { HeaderSectionProps } from '@/lib/interfaces'

import { TypographyH1, TypographyH4, TypographyParagraph } from '@/components/shared/Typography/Typography'

const HeaderSection: React.FC<HeaderSectionProps> = ({
  headerText,
  subHeaderText1,
  subHeaderText2,
  paragraphText,
  buttons = []
}) => {
  return (
    <div className='bg-main flex flex-col md:flex-row md:justify-between gap-10'>
      <div className='flex flex-1 flex-col gap-10 md:gap-10 self-center'>
        <TypographyH4 className='text-white self-center md:self-start font-sub'>{subHeaderText1}</TypographyH4>
        <TypographyH1 className='text-white self-center md:self-start'>{headerText}</TypographyH1>
        <div className='flex flex-row gap-2 justify-center md:justify-start'>
          {buttons.map((Button, index) => (
            <div key={index}>{Button}</div>
          ))}
        </div>
      </div>
      <div className='flex flex-1 flex-col self-center'>
        <TypographyH4 className='text-sub'>{subHeaderText2}</TypographyH4>
        <TypographyParagraph className='text-white'>{paragraphText}</TypographyParagraph>
      </div>
    </div>
  )
}

export default HeaderSection
