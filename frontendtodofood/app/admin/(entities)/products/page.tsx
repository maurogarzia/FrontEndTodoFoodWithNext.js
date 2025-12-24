import { getAllProducts } from "@/services/entities/products/products.service"
import ProductsAdmin from "./ProductsAdmin"
import { getAllCategories } from "@/services/entities/category/category.service"
import { getAllImages } from "@/services/entities/images/images.service"

async function getData() {
  const products = await getAllProducts()
  const categories = await getAllCategories()
  const images = await getAllImages()

  return {products, categories, images}
}

async function Products() {

  const {products, categories, images} = await getData()

  return (
    <ProductsAdmin products={products} categories={categories} images={images}/>
  )
}

export default Products