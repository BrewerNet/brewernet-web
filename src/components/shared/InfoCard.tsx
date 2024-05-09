import React from 'react'
import { TypographyH3, TypographyParagraph } from '@/components/shared/Typography/Typography'

function InfoCard({ icon, title, description }) {
  return (
    <div className='bg-white bg-opacity-20 rounded-3xl py-5 px-10 flex-1 max-w-[375px] min-h-[250px] flex flex-col'>
      <div className='border-0 p-2 text-sub'>{icon}</div>
      <TypographyH3 className='text-white'>{title}</TypographyH3>
      <TypographyParagraph className='text-white'>{description}</TypographyParagraph>
    </div>
  )
}

export default InfoCard
