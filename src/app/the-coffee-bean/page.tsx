import React from 'react'

import { PageProps } from '@/lib/interfaces'

import RootContainer from '@/components/shared/layout/RootContainer'
import { TypographyH1 } from '@/components/shared/Typography/Typography'

import TitleWrapper from './components/TitleWrapper'

const ContactPage: React.FC<PageProps> = () => {
  return (
    <RootContainer>
      <TitleWrapper>
        <TypographyH1> The coffee bean</TypographyH1>
      </TitleWrapper>
    </RootContainer>
  )
}

export default ContactPage
