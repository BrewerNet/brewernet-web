import React from 'react'

import { PageProps } from '@/lib/interfaces'

import HeroSection from '@/components/shared/HeroSection'
import RootContainer from '@/components/shared/layout/RootContainer'
import { TypographyH1 } from '@/components/shared/Typography/Typography'

import TitleWrapper from './components/TitleWrapper'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <RootContainer>
      <TitleWrapper>
        <TypographyH1> The coffee bean</TypographyH1>
      </TitleWrapper>
      <HeroSection filepath='/next.svg' image_description='the-coffee-bean-icon'>
        Connecting Over Coffee <br /> Networking in the Digital Age
      </HeroSection>
    </RootContainer>
  )
}

export default ContactPage
