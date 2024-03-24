import { render } from '@testing-library/react'
import { test } from 'vitest'

import Page from '../app/page'

test('Page', () => {
  render(<Page />)
  // expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})
