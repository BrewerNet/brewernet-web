
import { PageProps } from '@/lib/interfaces'

import Homepage from './homepage/page'

// import Hero from '../components/shared/Hero/Hero'

const Page: React.FC<PageProps> = () => {
  return (
    <div>
      {/* <Hero />
      <Link href='/about'>About</Link> */}
      <Homepage/>
    </div>
  )
}

export default Page
