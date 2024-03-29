import { PageProps } from '@/lib/interfaces'

import BMAC from '@/app/buy-me-a-coffee/page'
import CONTACT from '@/app/contact/page'
import HOME from '@/app/page'
import TCB from '@/app/the-coffee-bean/page'


interface Route {
  name: string
  title: string
  path: string
  component: React.FC<PageProps>
}

export const ROUTE_KEY = {
  HOME: 'home',
  THE_COFFEE_BEAN: 'the_coffee_bean',
  BUY_ME_A_COFFEE: 'buy_me_a_coffee',
  CONTACT: 'contact'
}

export const PUBLIC_ROUTE_CONFIG: Record<string, Route> = {
  [ROUTE_KEY.HOME]: {
    name: 'home',
    title: 'BrewerNet | Home',
    path: '/',
    component: HOME
  },
  [ROUTE_KEY.THE_COFFEE_BEAN]: {
    name: 'the coffee bean',
    title: 'BrewerNet | TCB',
    path: '/the-coffee-bean',
    component: TCB
  },
  [ROUTE_KEY.BUY_ME_A_COFFEE]: {
    name: 'buy me a coffee',
    title: 'BrewerNet | BMaC',
    path: '/buy-me-a-coffee',
    component: BMAC
  },
  [ROUTE_KEY.CONTACT]: {
    name: 'contact',
    title: 'BrewerNet | Contact Us',
    path: '/contact',
    component: CONTACT
  }
}
