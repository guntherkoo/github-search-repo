import { useQuery } from 'react-query'
import { getRepos } from '../github'

export const useGetRepos = (
  username: string,
  page: number,
  sort: string,
  filter: string
) => {
  return useQuery(
    ['repos', username, page, sort, filter],
    () => getRepos(username, page, sort, filter),
    {
      enabled: !!username,
    }
  )
}
