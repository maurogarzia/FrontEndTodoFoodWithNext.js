import { getAllProductsDetails } from "../../../../services/entities/productDetails/productDetails.service"
import SelectedProduct from "./SelectedProduct"

async function getData() {
    return await getAllProductsDetails()
}

async function SelectedProductPage() {

    const productsDetails = await getData()

    return (
        <SelectedProduct productsDetails={productsDetails}/>
    )
}

export default SelectedProductPage