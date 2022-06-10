import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search({ q }: { q?: string }) {
  const router = useRouter()
  const [query, setQuery] = useState<string>(q || '')

  useEffect(() => {
    if (q) {
      setQuery(q)
    }
  }, [q])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push({
      pathname: '/search',
      query: {
        q: query
      }
    })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value)
  }

  return (
    <div className="card bg-base-100 shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <input
            type="text"
            placeholder="What are you looking for? (e.g. Smart Contract, Tutorial, Security, ...)"
            className="p-2 shadow-sm bg-base-200 rounded"
            value={query}
            onChange={handleChange}
          ></input>
          <div className="mt-2 card-actions justify-center">
            <button className="btn">Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}
