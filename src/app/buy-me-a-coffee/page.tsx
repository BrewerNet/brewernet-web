import React from 'react'
import { FaUserGear } from 'react-icons/fa6'
import { IoMdPeople } from 'react-icons/io'
import { MdOutlineCoffee } from 'react-icons/md'

import { PageProps } from '@/lib/interfaces'

import HeaderSection from '@/components/shared/HeaderSection/HeaderSection'
import InfoCard from '@/components/shared/InfoCard/InfoCard'
import IntroSection from '@/components/shared/IntroSection/IntroSection'
import AppleStoreBtn from '@/components/shared/LinkButton/AppleStoreBtn'
import GooglePlayBtn from '@/components/shared/LinkButton/GooglePlayBtn'
import TitleSection from '@/components/shared/TitleSection/TitleSection'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrewerNet | BMaC'
}

const info = {
  headerSection: {
    headerText: 'Buy Me a Coffee',
    subHeaderText1: 'The coffee chat that changes your life.',
    subHeaderText2: '“Buy Me a Coffee” is a cutting-edge platform',
    paragraphText:
      'Merging online networking with in-person meetings, focusing on genuine connections and knowledge sharing through coffee conversations, enhancing both professional and personal growth.',
    buttons: [<AppleStoreBtn href='https://apple.com' key='apple' />, <GooglePlayBtn href='https://play.google.com' key='apple' />]
  },
  titleSection: {
    imgSrc: '/logos/bmac-bubble-logo-full.png',
    imgAlt: "BMaC's Logo",
    titlePart1: 'Connect, Chat,',
    titlePart2: 'Mentor, Succeed.',
    paragraphText: 'Connecting Over Coffee: Networking in the Digital Age'
  },
  infoCards: [
    {
      icon: <FaUserGear size='50px' />,
      title: 'SetUp',
      description: 'Set up your profile and digital business card to reflect your personality and the purpose of your invitation.'
    },
    {
      icon: <IoMdPeople size='50px' />,
      title: 'Paring',
      description: 'Connections based on interests, industries, and goals, supporting tag or name searches.'
    },
    {
      icon: <MdOutlineCoffee size='50px' />,
      title: 'Coffee Chat',
      description: 'Upon mutual agreement, a shared calendar facilitates easy scheduling of time and location.'
    }
  ],
  introSection: {
    content: (
      <>
        <span>
          <span className='font-extrabold text-main'>"Buy Me a Coffee"</span> is a cutting-edge digital platform{' '}
        </span>
        <span>transforming the way people network by merging the </span>
        <span>
          ease of <span className='font-write text-main underline font-bold italic'>online interaction with the genuineness of in-person </span>
        </span>
        <span>
          <span className='font-write text-main underline font-bold italic'>meetings</span>. In a world increasingly reliant on virtual{' '}
        </span>
        <span>
          connections, this platform motivates users, <span className='font-write text-red'>especially</span>{' '}
        </span>
        <span>
          <span className='font-write text-red'>students and young professionals</span>, to engage in{' '}
        </span>
        <span>valuable face-to-face discussions over coffee. It's </span>
        <span>designed to foster authentic relationships, </span>
        <span>
          encourage <span className='font-write text-main'>knowledge exchange</span>, and <span className='font-write text-main'>improve</span>{' '}
        </span>
        <span>
          <span className='font-write text-main'>networking</span> and <span className='font-write text-main'>social abilities</span> through informal{' '}
        </span>
        <span>coffee-based meetups. </span>
      </>
    ),
    icons: [
      { src: '/icons/icon-1.png', alt: 'Icon 1' },
      { src: '/icons/icon-2.png', alt: 'Icon 2' },
      { src: '/icons/icon-3.png', alt: 'Icon 3' },
      { src: '/icons/icon-4.png', alt: 'Icon 4' },
      { src: '/icons/icon-5.png', alt: 'Icon 5' }
    ],
    link: 'Try BMaC',
    href: ''
  }
}

const BuyMeACoffee: React.FC<PageProps> = () => {
  return (
    <div className='bg-main w-full'>
      <div className='bg-main lg:px-10 md:px-8 px-5 py-20 max-w-[1024px] mx-auto'>
        <HeaderSection {...info.headerSection} />
        <hr className='my-10 md:my-20' />
        <TitleSection {...info.titleSection} />
        <div className='mt-10 flex flex-col items-center lg:items-stretch lg:flex-row md:justify-around gap-10'>
          {info.infoCards.map(card => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <div className='bg-white'>
        <IntroSection {...info.introSection} />
      </div>
    </div>
  )
}

export default BuyMeACoffee
