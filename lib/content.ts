import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR_PATH = path.join(process.cwd(), 'content')

export function getContentBySlug(slug: string): Content | undefined {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  let found
  for (const fileName of fileNames) {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const content = getContent(fileContent)
    if (content.slug === slug) {
      found = content
      break
    }
  }

  return found
}

export function getContentByTags(tags: string[], mode: 'and' | 'or'): Content[] {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  const all: Content[] = fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return getContent(fileContent)
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

export function getAllContentSlugs(): Slug[] {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  return fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const content = getContent(fileContent)
    return {
      params: {
        slug: content.slug
      }
    }
  })
}

function getContent(fileContent: string): Content {
  const parsed = matter(fileContent)
  return {
    title: parsed.data.title,
    description: parsed.data.description,
    authors: parsed.data.authors,
    url: parsed.data.url,
    slug: parsed.data.slug,
    tags: parsed.data.tags,
    created: parsed.data.created,
    updated: parsed.data.updated,
    body: parsed.content
  }
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

type Slug = {
  params: {
    slug: string
  }
}
