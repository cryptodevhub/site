/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const table = require('text-table')

const { log } = console
const CONTENT_DIR_PATH = path.join(__dirname, '..', 'content')

function main() {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  const tags = fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const frontMatter = matter(fileContent)

    return frontMatter.data.tags
  })

  const flattened = tags.reduce((accum, tagArray) => {
    return [...accum, ...tagArray]
  }, [])

  const frequency = flattened.reduce((accum, tag) => {
    if (accum[tag] !== undefined) {
      accum[tag] += 1
    } else {
      accum[tag] = 1
    }
    return accum
  }, {})

  // Adaption of https://stackoverflow.com/a/1069840
  const sorted = Object.entries(frequency).sort(([, a], [, b]) => a - b)

  const result = table(sorted, { align: ['l', 'r'] })

  log(result)
}

main()
