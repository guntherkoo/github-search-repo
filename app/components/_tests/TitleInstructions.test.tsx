import { render, screen } from '@testing-library/react'
import TitleInstructions from '../TitleInstructions'

test('should render TitleInstructions component with correct title and instructions', () => {
  const title = 'Test Title'
  const instructions = 'Test instructions content'

  render(<TitleInstructions title={title} instructions={instructions} />)

  const titleElement = screen.getByRole('heading', { level: 1 })
  expect(titleElement).toBeInTheDocument()
  expect(titleElement).toHaveTextContent(title)

  const instructionsElement = screen.getByText(instructions)
  expect(instructionsElement).toBeInTheDocument()
  expect(instructionsElement).toHaveTextContent(instructions)
})
