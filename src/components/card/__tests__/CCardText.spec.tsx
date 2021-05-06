import * as React from 'react'
import { render /* ,screen */ /* ,fireEvent */ /* ,waitFor */ } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CCardText } from '../../../index'

test('loads and displays CCardText component', async () => {
  const { container } = render(<CCardText>Test</CCardText>)
  expect(container).toMatchSnapshot()
})

test('CCardText customize', async () => {
  const { container } = render(
    <CCardText className="bazinga" component="h3">
      Test
    </CCardText>,
  )
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass('bazinga')
  expect(container.firstChild).toHaveClass('card-text')
})