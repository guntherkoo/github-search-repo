import { RepoInterface } from '../utils/constants'

interface RepoTableProps {
  respositories: RepoInterface[]
}

const RepoTable = ({ respositories }: RepoTableProps) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="p-2 border border-neutral-600 w-40">Name</th>
          <th className="p-2 border border-neutral-600">Description</th>
          <th className="p-2 border border-neutral-600 w-80">URL</th>
        </tr>
      </thead>
      <tbody>
        {respositories.map((repo) => (
          <tr key={repo.id}>
            <td className="p-2 border border-neutral-600">{repo.name}</td>
            <td className="p-2 border border-neutral-600">
              {repo.description}
            </td>
            <td className="p-2 border border-neutral-600">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-400 transition duration-400"
              >
                {repo.html_url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default RepoTable
