import { render, screen } from '@testing-library/react'
import RepoTable from '../RepoTable'
import { RepoInterface } from '@/app/utils/constants'

const mockRepos: RepoInterface[] = [
  {
    id: 1,
    name: 'Repo 1',
    html_url: 'https://github.com/user/repo1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ante felis, egestas non cursus non, volutpat eu velit.',
  },
  {
    id: 2,
    name: 'Repo 2',
    html_url: 'https://github.com/user/repo2',
    description:
      'Nullam fringilla pellentesque ex nec auctor. Sed non ante blandit, rhoncus tortor sed, laoreet quam. Duis volutpat vehicula bibendum.',
  },
]

test('should render RepoTable with repository data', () => {
  render(<RepoTable respositories={mockRepos} />)

  expect(screen.getByText('Name')).toBeInTheDocument()
  expect(screen.getByText('Description')).toBeInTheDocument()
  expect(screen.getByText('URL')).toBeInTheDocument()

  mockRepos.forEach((repo) => {
    expect(screen.getByText(repo.name)).toBeInTheDocument()
    expect(screen.getByText(repo.description)).toBeInTheDocument()
  })

  const links = screen.getAllByRole('link')
  links.forEach((link, index) => {
    expect(link).toHaveAttribute('href', mockRepos[index].html_url)
  })
})
