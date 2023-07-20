import { render, screen } from '@testing-library/react'
import App from './App'

test('renders count is link', () => {
  render(<App />)
  const linkElement = screen.getByText(/count is/i)
  expect(linkElement).toBeInTheDocument()
})
