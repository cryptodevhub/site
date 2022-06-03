/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const CONTENT_DIR_PATH = path.join(__dirname, '..', 'content')

function getTagFrequencies() {
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

  return frequency
}

module.exports = {
  getTagFrequencies,
  CONTENT_DIR_PATH
}
