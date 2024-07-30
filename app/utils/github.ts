import axios from 'axios'

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})

export const getRepos = async (
  username: string,
  page: number,
  sort: string,
  filter: string
) => {
  const response = await githubApi.get(`/users/${username}/repos`, {
    params: { page, sort, type: filter, per_page: 6 },
  })
  return response.data
}
