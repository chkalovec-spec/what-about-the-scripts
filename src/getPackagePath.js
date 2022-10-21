import pathNode from 'path'
import fs from 'fs'

export const getPackagePath = (path) => {
  try {
    const isDir = fs.lstatSync(path).isDirectory()
    return pathNode.resolve(path, isDir ? 'package.json' : '')
  } catch (error) {
    if (error.message.includes('permission denied')) {
      console.error(
        'Permission denied. Please check the permissions of the file or run the script as root',
      )
    } else {
      console.error(error.message)
    }
    process.exit(1)
  }
}
