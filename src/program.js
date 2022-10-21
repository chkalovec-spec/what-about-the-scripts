import { program } from 'commander'
import packageJson from '../package.json' assert { type: 'json' }
import { getPackageFileData } from './getPackageFileData.js'
import { getPackagePath } from './getPackagePath.js'
import { getPackageScrips } from './getPackageScrips.js'
import { logScripts } from './logScripts.js'

const { bin, description, version } = packageJson

program
  .name(Object.keys(bin)[0])
  .description(description)
  .version(version)
  .argument('<path>', 'path to package.json or folder where this file is located file is located')

export const startProgram = () => {
  program.parse()
  const argPath = program.args[0]
  const packagePath = getPackagePath(argPath)
  const packageFileData = getPackageFileData(packagePath)
  const scripts = getPackageScrips(packageFileData)

  logScripts(scripts)

  process.exit(0)
}
