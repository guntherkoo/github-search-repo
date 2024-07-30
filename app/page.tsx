'use client'
import { useState } from 'react'
import { RepoTable, SearchForm, Select, TitleInstructions } from './components'
import { useGetRepos } from './utils/hooks/useGetRepos'

export default function Homepage() {
  const [username, setUsername] = useState('')
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('created')
  const [filter, setFilter] = useState('all')

  const { data, isLoading, error } = useGetRepos(username, page, sort, filter)

  const handleSearch = (username: string) => {
    setUsername(username)
    setPage(1)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-12 gap-6">
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <TitleInstructions
              title="GitHub Repository Search"
              instructions="Enter a username or organization below:"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <SearchForm
                handleSearch={handleSearch}
                defaultValue="guntherkoo"
              />
              <Select
                value={sort}
                setValue={setSort}
                label="Sort"
                options={['Created', 'Updated', 'Pushed', 'Name']}
              />
              <Select
                value={filter}
                setValue={setFilter}
                label="Filter"
                options={['All', 'Public', 'Private']}
              />
            </div>

            {data && (
              <div className="flex gap-6 items-center w-36 justify-end">
                <button
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className={`hover:text-neutral-400 transition duration-400 ${
                    page === 1 ? 'text-neutral-500 pointer-events-none' : ''
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  className={`hover:text-neutral-400 transition duration-400 ${
                    !!!data && data?.length === 0
                      ? 'text-neutral-500 pointer-events-none'
                      : ''
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {isLoading && (
            <div className="flex rounded-lg bg-neutral-900 p-4">
              <p className="text-lg font-light">Loading...</p>
            </div>
          )}
          {(error as boolean) && <p>Error loading repositories</p>}
          {data && data.length > 0 && (
            <div className="flex flex-col rounded-lg bg-neutral-900 p-4">
              <RepoTable respositories={data} />
            </div>
          )}
          {data && data.length === 0 && (
            <div className="flex rounded-lg bg-neutral-900 p-4">
              <p className="text-lg font-light">No more results...</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-white">Gunther Koo | Take Home Assignment</p>
    </main>
  )
}
