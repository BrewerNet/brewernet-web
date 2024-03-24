'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/Image'
import styles from './contact.module.css'
import { TypographyH1, TypographyParagraph } from '../../components/shared/Typography/Typography.tsx'
import { PageProps } from '@/lib/interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faHandshake, faSolid } from '@fortawesome/free-solid-svg-icons'

const ContactPage: React.FC<PageProps> = () => {
  const [selected, setSelected] = useState('query')
  const handleButtonClick = button => {
    setSelected(button)
  }
  // query or affiliate
  const description = {
    query: "At BrewerNet, your journey is important to us. Facing challenges or have questions about "The Coffee Bean" Discord community or the "Buy Me a Coffee" app? Our Query Section is designed for you. Here, you can seek guidance, gain insights, and find answers from our dedicated team. We understand the hurdles of transitioning from academia to professional life and are committed to smoothing your path with prompt and helpful responses. Reach out to us – let's make connections that propel your career forward.",
    affiliate: "Join BrewerNet's Affiliate Program and be a part of our mission to enhance career development through networking. This program is a fantastic opportunity for content creators, educators, and career influencers to collaborate with us. By promoting "The Coffee Bean" and "Buy Me a Coffee," you can earn commissions while helping others in their professional journey. Together, we can create meaningful connections and support those transitioning from academic life to the workforce. Sign up now and make an impact with us!"
  }
  return (
    <div className={styles.contactWrapper}>
      <TypographyH1 className='text-center'>Contact</TypographyH1>
      <div className={styles.contactLogo}>
        <Link href='/the-coffee-bean'>
          <Image src='/logo/tcb-logo.png' alt="TCB's Favicon" width={200} height={200}></Image>
        </Link>
        <Link href='/'>
          <Image src='/logo/brewernet-logo.png' alt="BrewerNet's Favicon" width={300} height={300}></Image>
        </Link>
        <Link href='/buy-me-a-coffee'>
          <Image src='/logo/bmac-logo.png' alt="BMaC's Favicon" width={200} height={200}></Image>
        </Link>
      </div>
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactInfoButtons}>
          <button onClick={() => handleButtonClick('query')} className={selected === 'query' ? styles.contactSelectedButton : styles.contactButton}>
            Query
          </button>
          <button onClick={() => handleButtonClick('affiliate')} className={selected === 'affiliate' ? styles.contactSelectedButton : styles.contactButton}>
            Affiliate
          </button>
        </div>
        <div className={styles.contactInfoButtons}>
          {selected === 'query' ? <FontAwesomeIcon icon={faCircleInfo} /> : <FontAwesomeIcon icon={(faSolid, faHandshake)} />}
          <TypographyParagraph>{description[selected]}</TypographyParagraph>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
