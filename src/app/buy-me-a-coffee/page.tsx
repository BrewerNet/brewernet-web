import React from 'react'
import { FaUserGear } from 'react-icons/fa6'
import { IoMdPeople } from 'react-icons/io'
import { MdOutlineCoffee } from 'react-icons/md'
import { PageProps } from '@/lib/interfaces'
import HeaderSection from '@/components/shared/HeaderSection'
import TitleSection from '@/components/shared/TitleSection'
import IntroSection from '@/components/shared/IntroSection'
import InfoCard from '@/components/shared/InfoCard'
import AppleStoreBtn from '@/components/shared/LinkButton/AppleStoreBtn'
import GooglePlayBtn from '@/components/shared/LinkButton/GooglePlayBtn'

const info = {
  headerSection: {
    headerText: 'Buy Me a Coffee',
    subHeaderText1: 'The coffee chat that changes your life.',
    subHeaderText2: '“Buy Me a Coffee” is a cutting-edge platform',
    paragraphText:
      'Merging online networking with in-person meetings, focusing on genuine connections and knowledge sharing through coffee conversations, enhancing both professional and personal growth.',
    buttons: [<AppleStoreBtn href='https://apple.com' />, <GooglePlayBtn href='https://play.google.com' />]
  },
  titleSection: {
    imgSrc: '/logos/bmac-bubble-logo-full.png',
    imgAlt: "BMaC's Logo",
    titlePart1: 'Network, Engage,',
    titlePart2: 'Share, Innovate.',
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
    content:
      "Buy Me a Coffee is a cutting-edge digital platform transforming the way people network by merging the ease of online interaction with the genuineness of in-person meetings. In a world increasingly reliant on virtual connections, this platform motivates users, especially students and young professionals, to engage in valuable face-to-face discussions over coffee. It's designed to foster authentic relationships, encourage knowledge exchange, and improve networking and social abilities through informal coffee-based meetups.",
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
    <div className='bg-white w-full'>
      <div className='bg-main rounded-b-lg md:rounded-b-3xl md:py-20 py-20 md:px-10 px-5'>
        <HeaderSection {...info.headerSection} />
        <hr className='my-10 md:my-20' />
        <TitleSection {...info.titleSection} />
        <div className='mt-20 flex flex-col items-center md:items-stretch md:flex-row md:justify-around gap-10'>
          {info.infoCards.map(card => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
      <IntroSection {...info.introSection} />
    </div>
  )
}

export default BuyMeACoffee
