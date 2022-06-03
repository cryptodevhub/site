/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const { CONTENT_DIR_PATH } = require('./shared')

const { log } = console

function main() {
  const fileNames = fs.readdirSync(CONTENT_DIR_PATH)

  const urls = fileNames.map((fileName) => {
    const filePath = path.join(CONTENT_DIR_PATH, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const frontMatter = matter(fileContent)

    return frontMatter.data.url
  })

  // Adaption of https://stackoverflow.com/a/32122760
  const duplicates = urls.filter((e, i, a) => a.indexOf(e) !== i)

  if (duplicates.length > 0) {
    for (const duplicate of duplicates) {
      log(duplicate)
    }
  } else {
    log('No duplicates found...')
  }
}

main()
