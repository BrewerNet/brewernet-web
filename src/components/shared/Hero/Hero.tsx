import Image from 'next/image'
import React from 'react'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.textContainer}>
        <div className={styles.name}>BrewerNet</div>
        <div className={styles.slogan}>Connections Make the World Better</div>
        <p className={styles.description}>A Community uses compassionate tech for innovative life improvements and a brighter future</p>
      </div>
      <Image src="/HeroBackground.png" alt="Hero Background" width={500} height={500} className={styles.heroImg}></Image>
    </div>
  )
}
