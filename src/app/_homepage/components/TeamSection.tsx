// TeamSection.tsx

import Image, { StaticImageData } from 'next/image'
import React from 'react'

import { TypographyH2 } from '../../../components/shared/Typography/Typography'

interface TeamSectionProps {
  title: string
  images: { src: StaticImageData; alt: string }[]
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, images }) => {
  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between px-10 mb-24'>
      <TypographyH2 className='text-center lg:text-start w-1/5 text-sky-400 pt-6 border-none mb-8'>{title}</TypographyH2>
      <div className='flex-col md:flex-row w-4/5 flex items-center md:space-x-8 justify-around'>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} width={247} height={375} className='mb-8' />
        ))}
      </div>
    </div>
  )
}

export default TeamSection
