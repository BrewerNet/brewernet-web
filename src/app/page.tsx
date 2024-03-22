import { PageProps } from '@/lib/interfaces'
import Link from 'next/link'

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href='/about'>About</Link>
    </div>
  )
}

export default Page
