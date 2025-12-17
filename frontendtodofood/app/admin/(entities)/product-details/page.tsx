import { getAllProductsDetails } from "@/services/entities/productDetails/productDetails.service"
import ProductDetailsAdmin from "./ProductDetailsAdmin"

async function getData() {
  return await getAllProductsDetails()
}

async function ProductDetails() {

  const productsDetails = await getData()

  return (
    <ProductDetailsAdmin productDetails={productsDetails}/>
  )
}

export default ProductDetails