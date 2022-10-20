import { program } from 'commander'
import packageJson from '../package.json' assert { type: 'json' }

const { bin, description, version } = packageJson

program
  .name(Object.keys(bin)[0])
  .description(description)
  .version(version)
  .argument('<path>', 'path to package.json or folder where this file is located file is located')

export const startProgram = () => {
  program.parse()
  const path = program.args[0]

  console.log('program has been started', path)
}
