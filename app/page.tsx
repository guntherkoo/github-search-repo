'use client'
import { useState } from 'react'
import { RepoTable, SearchForm } from './components'
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
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">GitHub Repository Search</h1>
            <p className="text-1xl font-normal">
              Enter a username or organization below:
            </p>
            <SearchForm handleSearch={handleSearch} defaultValue="guntherkoo" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <label>
                Sort:{' '}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-neutral-800 font-light p-1"
                >
                  <option value="created">Created</option>
                  <option value="updated">Updated</option>
                  <option value="pushed">Pushed</option>
                  <option value="full_name">Name</option>
                </select>
              </label>
              <label>
                Filter:{' '}
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="text-neutral-800 font-light p-1"
                >
                  <option value="all">All</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </label>
            </div>
            {data && (
              <div className="flex gap-6 items-center">
                {page !== 1 && (
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="hover:text-neutral-400 transition duration-400"
                  >
                    Previous
                  </button>
                )}
                {data.length > 0 && (
                  <button
                    onClick={() => setPage((prev) => prev + 1)}
                    className="hover:text-neutral-400 transition duration-400"
                  >
                    Next
                  </button>
                )}
              </div>
            )}
          </div>

          {isLoading && <p>Loading...</p>}
          {(error as boolean) && <p>Error loading repositories</p>}
          {data && data.length > 0 && (
            <div className="flex flex-col rounded-lg bg-neutral-900 p-6">
              <RepoTable respositories={data} />
            </div>
          )}
          {data && data.length === 0 && (
            <div className="flex rounded-lg bg-neutral-900 p-6">
              <p className="text-lg font-light">No more results...</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-white">Gunther Koo | Take Home Assignment</p>
    </main>
  )
}
