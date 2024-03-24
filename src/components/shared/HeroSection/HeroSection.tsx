import Image from 'next/image'
import React, { ReactNode } from 'react'

import { DEFAULT_IMAGE_HEIGHT, DEFAULT_IMAGE_WIDTH } from '@/lib/constant'

import { FlexContainer } from '../layout/FlexContainer'
import { TypographyH3 } from '../Typography/Typography'

interface HeroProps {
  filepath: string
  image_description?: string
  children: ReactNode
}

const HeroSection: React.FC<HeroProps> = ({ filepath, image_description, children }) => {
  return (
    <div>
      <FlexContainer>
        <div className='grid grid-cols-2 gap-10'>
          <Image src={filepath} alt={image_description || ''} width={DEFAULT_IMAGE_WIDTH} height={DEFAULT_IMAGE_HEIGHT} />
          <TypographyH3>{children}</TypographyH3>
        </div>
      </FlexContainer>
    </div>
  )
}

export default HeroSection
