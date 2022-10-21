import fs from 'fs'

export const getPackageFileData = (path) => {
  try {
    return fs.readFileSync(path, {
      encoding: 'utf-8',
    })
  } catch (error) {
    console.error(
      'The package.json file was not found. Please check that the file path is correct.',
    )
    process.exit(1)
  }
}
