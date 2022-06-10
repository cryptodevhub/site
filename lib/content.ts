import fs from 'fs'
import path from 'path'
import html from 'remark-html'
import { remark } from 'remark'
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

export function getContentByTags(tags: string[], operator: Operator): Content[] {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  const all: Content[] = fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return getContent(fileContent)
  })

  let filtered
  if (operator === 'or') {
    filtered = all.filter((content) => {
      return tags.some((tag) => content.tags.includes(tag))
    })
  } else {
    filtered = all.filter((content) => {
      return tags.every((tag) => content.tags.includes(tag))
    })
  }

  return sort(filtered)
}

export function getAllContent(): Content[] {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  const all: Content[] = fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    return getContent(fileContent)
  })

  return sort(all)
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
  const processed = remark().use(html).processSync(parsed.content)
  return {
    title: parsed.data.title,
    description: parsed.data.description,
    authors: parsed.data.authors,
    slug: parsed.data.slug,
    tags: parsed.data.tags,
    created: parsed.data.created,
    updated: parsed.data.updated,
    body: processed.toString(),
    url: parsed.data.url || null,
    embedded: parsed.data.embedded || null
  }
}

function sort(content: Content[]): Content[] {
  return content.sort(({ updated: a }, { updated: b }) => {
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
  slug: string
  tags: string[]
  created: string
  updated: string
  body: string
  url?: string
  embedded?: Embedded
}

type Operator = 'and' | 'or'

type Embedded = {
  tags: string[]
  operator: Operator
}

type Slug = {
  params: {
    slug: string
  }
}
