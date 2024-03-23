import React from 'react'

import { PageProps } from '@/lib/interfaces'

import HeroSection from '@/components/shared/HeroSection'
import { FlexContainer } from '@/components/shared/layout/FlexContainer'
import RootContainer from '@/components/shared/layout/RootContainer'
import AppleStoreBtn from '@/components/shared/LinkButton/AppleStoreBtn'
import GooglePlayBtn from '@/components/shared/LinkButton/GooglePlayBtn'
import { TypographyH1,TypographyH2 } from '@/components/shared/Typography/Typography'

import TitleWrapper from './components/TitleWrapper'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <RootContainer>
      <TitleWrapper>
        <TypographyH1> The coffee bean</TypographyH1>
      </TitleWrapper>

      <HeroSection filepath='/next.svg' image_description='the-coffee-bean-icon'>
        <TypographyH2>Connecting Over Coffee</TypographyH2>
        <br />
        <TypographyH2>Networking in the Digital Age</TypographyH2>
        <FlexContainer classname='mt-16 gap-10'>
          <AppleStoreBtn href='http://google.com' />
          <GooglePlayBtn href='http://google.com' />
        </FlexContainer>
      </HeroSection>
    </RootContainer>
  )
}

export default ContactPage
