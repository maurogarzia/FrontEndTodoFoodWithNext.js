import { getAllAddresses } from "@/services/entities/address/address.service"
import AddressAdmin from "./AddressAdmin"

async function getData() {
    return await getAllAddresses()
}

async function Address() {

    const addresses = await getData()

    return (
        <AddressAdmin addresses={addresses}/>
    )
}

export default Address