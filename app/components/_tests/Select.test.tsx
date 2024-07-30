import { render, screen, fireEvent } from '@testing-library/react'
import Select from '../Select'
import { useState } from 'react'

const SelectTestComponent = () => {
  const [value, setValue] = useState('option1')
  return (
    <Select
      value={value}
      setValue={setValue}
      label="Test Select"
      options={['Option1', 'Option2', 'Option3']}
    />
  )
}

test('should render Select component with correct initial value', () => {
  render(<SelectTestComponent />)

  expect(screen.getByLabelText(/Test Select/i)).toBeInTheDocument()

  expect(screen.getByRole('combobox')).toHaveValue('option1')
})

test('should changes value on user selection', () => {
  render(<SelectTestComponent />)

  const selectElement = screen.getByRole('combobox')

  fireEvent.change(selectElement, { target: { value: 'option2' } })

  expect(selectElement).toHaveValue('option2')
})

test('should render all options', () => {
  render(<SelectTestComponent />)

  const options = screen.getAllByRole('option')
  const optionValues = ['option1', 'option2', 'option3']

  options.forEach((option, index) => {
    expect(option).toHaveValue(optionValues[index])
    expect(option).toHaveTextContent(
      optionValues[index].charAt(0).toUpperCase() + optionValues[index].slice(1)
    )
  })
})
