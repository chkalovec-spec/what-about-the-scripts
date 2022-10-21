export const getPackageScrips = (packageFileData) => {
  try {
    const { scripts } = JSON.parse(packageFileData)
    return scripts
  } catch (error) {
    console.error('Error parsing package.json file. Please check the correctness of the file')
    process.exit(1)
  }
}
