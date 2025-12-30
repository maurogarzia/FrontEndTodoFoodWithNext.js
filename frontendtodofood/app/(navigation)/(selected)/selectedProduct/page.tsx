import { getAllProductsDetails } from "@/services/entities/productDetails/productDetails.service"
import SelectedProduct from "./SelectedProduct"

async function getData() {
    return await getAllProductsDetails()
}

async function page() {

    const productsDetails = await getData()

    return (
        <SelectedProduct productsDetails={productsDetails}/>
    )
}

export default page