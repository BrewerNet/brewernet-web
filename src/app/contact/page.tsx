'use client'

import { faCircleInfo, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import styles from './contact.module.css'

import { PageProps } from '@/lib/interfaces'

import { TypographyH1, TypographyH4, TypographyParagraph } from '@/components/shared/Typography/Typography'

const ContactPage: React.FC<PageProps> = () => {
  const [order, setOrder] = useState([0, 1, 2])
  const [selected, setSelected] = useState('query')
  const handleButtonClick = (button: string) => {
    setSelected(button)
  }

  type DescriptionType = {
    [key: string]: { desc: string; email: string }
  }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setOrder(prevOrder => {
  //         const newOrder = [...prevOrder]
  //         const firstElement = newOrder.shift()
  //         if (typeof firstElement === 'number') {
  //           newOrder.push(firstElement)
  //         }
  //         return newOrder
  //       })
  //     }, 5000)

  //     return () => clearInterval(interval)
  //   }, [])

  const images = [
    { href: '/the-coffee-bean', src: '/logo/tcb-bubble-logo.png', alt: "TCB's Favicon" },
    { href: '/', src: '/logo/bn-legacy.png', alt: "BrewerNet's Favicon" },
    { href: '/buy-me-a-coffee', src: '/logo/bmac-bubble-logo.png', alt: "BMaC's Favicon" }
  ]

  const description: DescriptionType = {
    query: {
      desc: 'At BrewerNet, your journey is important to us. Facing challenges or have questions about "The Coffee Bean" Discord community or the "Buy Me a Coffee" app? Our Query Section is designed for you. Here, you can seek guidance, gain insights, and find answers from our dedicated team. We understand the hurdles of transitioning from academia to professional life and are committed to smoothing your path with prompt and helpful responses. Reach out to us – let\'s make connections that propel your career forward.',
      email: 'query@brewernet.io'
    },
    affiliate: {
      desc: 'Join BrewerNet\'s Affiliate Program and be a part of our mission to enhance career development through networking. This program is a fantastic opportunity for content creators, educators, and career influencers to collaborate with us. By promoting "The Coffee Bean" and "Buy Me a Coffee", you can earn commissions while helping others in their professional journey. Together, we can create meaningful connections and support those transitioning from academic life to the workforce.',
      email: 'affiliate@brewernet.io'
    }
  }

  return (
    <div className={styles.contactWrapper}>
      <TypographyH1 className='text-center text-white border-b-4'>Contact us</TypographyH1>
      <div className={styles.contactLogo}>
        {order.map((index, i) => (
          <div key={index} className={styles.imageTransition}>
            <Link href={images[index].href}>
              <Image src={images[index].src} alt={images[index].alt} width={i === 1 ? 400 : 400} height={i === 1 ? 300 : 300} />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.contactInfoWrapper}>
        <div className={styles.contactInfoButtons}>
          <button onClick={() => handleButtonClick('query')} className={selected === 'query' ? styles.contactSelectedButton : styles.contactButton}>
            <TypographyH4 className='text-white'>Query</TypographyH4>
          </button>
          <button onClick={() => handleButtonClick('affiliate')} className={selected === 'affiliate' ? styles.contactSelectedButton : styles.contactButton}>
            <TypographyH4 className='text-white'>Affiliate</TypographyH4>
          </button>
        </div>
        <div className={styles.contactInfoContainer}>
          <FontAwesomeIcon icon={selected === 'query' ? faCircleInfo : faHandshake} className={`${styles.backgroundIcon}`} />
          <div className={styles.contactInfoText}>
            <TypographyParagraph className='text-white'>{description[selected].desc}</TypographyParagraph>
          </div>
        </div>
      </div>
      <button className={styles.contactEmailButton} onClick={() => (window.location.href = `${description[selected].email}`)}>
        <TypographyH4>{description[selected].email}</TypographyH4>
      </button>
    </div>
  )
}

export default ContactPage

{
}
