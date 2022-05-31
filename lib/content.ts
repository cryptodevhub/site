import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR_PATH = path.join(process.cwd(), 'content')

export function getContentByTags(tags: string[], mode: 'and' | 'or'): Content[] {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  const all: Content[] = fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const content = fs.readFileSync(filePath, 'utf-8')

    const parsed = matter(content)

    const { title, description, authors, url, slug, tags, created, updated } = parsed.data

    return {
      title,
      description,
      authors,
      url,
      slug,
      tags,
      created,
      updated,
      body: parsed.content
    }
  })

  let filtered
  if (mode === 'or') {
    filtered = all.filter((content) => {
      return tags.some((tag) => content.tags.includes(tag))
    })
  } else {
    filtered = all.filter((content) => {
      return tags.every((tag) => content.tags.includes(tag))
    })
  }

  return filtered.sort(({ updated: a }, { updated: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    }
    return 0
  })
}

export type Content = {
  title: string
  description: string
  authors: string[]
  url: string
  slug: string
  tags: string[]
  created: string
  updated: string
  body: string
}
