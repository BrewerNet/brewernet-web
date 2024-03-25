import Link from 'next/link'

import { PageProps } from '@/lib/interfaces'

import Hero from '../components/shared/Hero/Hero'

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <Hero />
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Page
