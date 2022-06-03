/* eslint-disable @typescript-eslint/no-var-requires */

const table = require('text-table')

const { getTagFrequencies } = require('./shared')

const { log } = console

function main() {
  const tags = getTagFrequencies()

  // Adaption of https://stackoverflow.com/a/1069840
  const sorted = Object.entries(tags).sort(([a], [b]) => a.localeCompare(b))

  const result = table(sorted, { align: ['l', 'r'] })

  log(result)
}

main()
