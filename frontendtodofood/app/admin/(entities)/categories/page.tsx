import { getAllCategories } from "@/services/entities/category/category.service"
import CategoriesAdmin from "./CategoriesAdmin"

async function getData() {
  return await getAllCategories()
}

async function Categories() {

  const categories = await getData()

  return (
    <CategoriesAdmin categories={categories}/>
  )
}

export default Categories