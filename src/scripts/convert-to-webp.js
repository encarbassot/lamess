import sharp from "sharp"
import { promises as fs } from 'fs'
import path from "path"


const inputDir = './public/clients'
const outputDir = './public/clients'


async function convertImagesToWebP() {
  try {
    const files = await fs.readdir(inputDir)

    const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png')

    for (const file of pngFiles) {
      const inputFilePath = path.join(inputDir, file)
      const outputFilePath = path.join(outputDir, `${path.basename(file, '.png')}.webp`)

      await sharp(inputFilePath)
        .toFormat('webp')
        .toFile(outputFilePath)

      console.log(`Converted: ${file} -> ${path.basename(outputFilePath)}`)
    }

    console.log('All PNG images converted to WebP!')
  } catch (error) {
    console.error('Error converting images:', error)
  }
}

convertImagesToWebP()
