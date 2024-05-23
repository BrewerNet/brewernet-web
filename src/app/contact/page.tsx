import { faCircleInfo, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import ContactInfoSection from '@/components/shared/ContactInfoSection/ContactInfoSection'

import { TypographyH1, TypographyH4, TypographyParagraph } from '@/components/shared/Typography/Typography'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrewerNet | Contact'
}

const ContactPage = () => {
  const images = [
    { href: '/buy-me-a-coffee', src: '/logos/bmac-text-logo.png', alt: "BMaC's Favicon" },
    { href: '/', src: '/logos/bn-favicon-01.png', alt: "BrewerNet's Favicon" },
    { href: '/the-coffee-bean', src: '/logos/tcb-text-logo.png', alt: "TCB's Favicon" }
  ]

  const description = {
    query: {
      desc: 'At BrewerNet, your journey is important to us. Facing challenges or have questions about "The Coffee Bean" Discord community or the "Buy Me a Coffee" app? Our Query Section is designed for you. Here, you can seek guidance, gain insights, and find answers from our dedicated team. We understand the hurdles of transitioning from academia to professional life and are committed to smoothing your path with prompt and helpful responses. Reach out to us – let\'s make connections that propel your career forward.',
      email: 'query@brewernet.io'
    },
    affiliate: {
      desc: 'Join BrewerNet\'s Affiliate Program and be a part of our mission to enhance career development through networking. This program is a fantastic opportunity for content creators, educators, and career influencers to collaborate with us. By promoting "The Coffee Bean" and "Buy Me a Coffee", you can earn commissions while helping others in their professional journey. Together, we can create meaningful connections and support those transitioning from academic life to the workforce.',
      email: 'affiliate@brewernet.io'
    }
  };

  return (
    <div className='flex flex-col text-center items-center justify-center py-5 px-2 md:px-10 md:py-10 bg-main'>
      <TypographyH1 className='text-center text-white border-b-4'>Contact us</TypographyH1>
      <div className='flex items-center justify-center flex-row overflow-x-hidden h-1/4'>
        {images.map((image, i) => (
          <div key={i} className='transition transform duration-500 ease'>
            <Link href={image.href}>
              <Image src={image.src} alt={image.alt} width={400} height={400} />
            </Link>
          </div>
        ))}
      </div>
      <ContactInfoSection description={description} />
    </div>
  );
};

export default ContactPage;
