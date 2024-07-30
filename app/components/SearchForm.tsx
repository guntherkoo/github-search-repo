import { useState } from 'react'

interface SearchFormProps {
  handleSearch: (username: string) => void
  defaultValue: string
}

const SearchForm = ({ handleSearch, defaultValue }: SearchFormProps) => {
  const [username, setUsername] = useState(defaultValue)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    handleSearch(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="guntherkoo"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="text-neutral-800 font-light h-10 rounded-md px-2 min-w-72 text-xl"
        />
        <button
          type="submit"
          className="flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 py-1 px-6 text-lg text-white transition duration-400 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none disabled:text-blue-100"
        >
          Search
        </button>
      </fieldset>
    </form>
  )
}

export default SearchForm
