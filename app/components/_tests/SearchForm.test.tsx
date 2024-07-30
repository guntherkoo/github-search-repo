import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from '../SearchForm'

test('should render SearchForm', () => {
  const handleSearch = jest.fn()
  render(<SearchForm handleSearch={handleSearch} defaultValue="guntherkoo" />)

  const input = screen.getByPlaceholderText(
    /Enter username or organization here/i
  ) as HTMLInputElement

  expect(input.value).toBe('guntherkoo')
})

test('should renders SearchForm and submits with correct input', () => {
  const handleSearch = jest.fn()
  render(<SearchForm handleSearch={handleSearch} defaultValue="guntherkoo" />)

  const input = screen.getByPlaceholderText(
    /Enter username or organization here/i
  )
  fireEvent.change(input, { target: { value: 'guntherkoo' } })

  const button = screen.getByRole('button', { name: /Search/i })
  fireEvent.click(button)

  expect(handleSearch).toHaveBeenCalledWith('guntherkoo')
})
