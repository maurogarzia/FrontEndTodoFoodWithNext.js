import { getAllSizes } from "@/services/entities/size/size.service"
import SizesAdmin from "./SizesAdmin"

async function getData(){
  return await getAllSizes()
}


async function Sizes() {

  const sizes = await getData()

  return (
    <SizesAdmin sizes={sizes}/>
  )
}

export default Sizes