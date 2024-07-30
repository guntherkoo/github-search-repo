import { SetStateAction } from 'react'

interface SelectProps {
  value: string
  setValue: (value: SetStateAction<string>) => void
  label: string
  options: string[]
}

const Select = ({ value, setValue, label, options }: SelectProps) => {
  return (
    <label>
      {label}:{' '}
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-neutral-800 font-light p-1 rounded"
      >
        {options.map((option, index) => {
          return (
            <option value={option.toLowerCase()} key={index}>
              {option}
            </option>
          )
        })}
      </select>
    </label>
  )
}

export default Select
