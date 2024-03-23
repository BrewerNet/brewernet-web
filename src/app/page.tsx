import Link from 'next/link'

import { PageProps } from '@/lib/interfaces'

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Page
