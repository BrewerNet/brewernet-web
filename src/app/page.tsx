import Link from 'next/link'

import { PageProps } from '@/lib/interfaces'

import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Page
