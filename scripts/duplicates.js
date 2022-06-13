/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const matter = require('gray-matter')

const { getAllFilePaths, CONTENT_DIR_PATH } = require('./shared')

const { log } = console

function main() {
  const filePaths = getAllFilePaths(CONTENT_DIR_PATH)

  const urls = filePaths.reduce((accum, filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const frontMatter = matter(fileContent)

    if (frontMatter.data.url) {
      accum.push(frontMatter.data.url)
    }

    return accum
  }, [])

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
