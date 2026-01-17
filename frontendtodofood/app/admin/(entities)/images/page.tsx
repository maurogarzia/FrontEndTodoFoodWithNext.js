import { getAllImages } from '@/services/entities/images/images.service'
import ImagesAdmin from './ImagesAdmin'

async function getData(){
  return await getAllImages()
}

async function Images() {

  const images = await getData()

  return (
    <ImagesAdmin images={images}/>
  )
}

export default Images