import lunr from 'lunr'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { getAllContent } from '../lib/content'

export default function Search({ index, documents }: Props) {
  const router = useRouter()
  const idx = lunr.Index.load(JSON.parse(index))
  const [query, setQuery] = useState<string>('')
  const [result, setResult] = useState<lunr.Index.Result[]>([])

  useEffect(() => {
    if (router.isReady) {
      const q = router.query.q
      if (q) {
        setQuery(q as string)
      }
    }
  }, [router.isReady, router.query.q])

  useEffect(() => {
    if (query && query.length > 0) {
      let result: lunr.Index.Result[] = []
      try {
        result = idx.search(query)
      } catch (e) {}
      setResult(result)
    } else {
      setResult([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    setQuery(value)
    router.push(
      {
        query: {
          q: value
        }
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  return (
    <>
      <NextSeo
        title="Search"
        description="Find Blockchain development tutorials, tools, articles, jobs and more."
      />
      <section>
        <h1>Search</h1>
        <h2>Find Blockchain development tutorials, tools, articles, jobs and more.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='What are you looking for? (e.g. "Smart Contract", "Tutorial", "Security", ...)'
            value={query}
            onChange={handleChange}
          />
        </form>
        {result.length > 0 && (
          <ul>
            {result.map((item) => (
              <li key={item.ref}>
                <Link href={`/content/${item.ref}`}>
                  <a>{documents[item.ref].title}</a>
                </Link>
                <p>{documents[item.ref].description}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = getAllContent()
  const documents: Record<string, unknown> = {}

  const index = lunr(function () {
    this.ref('slug')
    this.field('title', { boost: 10 })
    this.field('description')
    this.field('tags')

    content.forEach((item) => {
      this.add(item)
      const { title, description, tags } = item
      documents[item.slug] = { title, description, tags }
    }, this)
  })

  return {
    props: {
      documents,
      index: JSON.stringify(index.toJSON())
    }
  }
}

type Props = {
  index: string
  documents: Record<string, Document>
}

type Document = {
  title: string
  description: string
  tags: string[]
}
