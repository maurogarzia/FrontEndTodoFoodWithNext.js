import { getAllAddresses } from "@/services/entities/address/address.service"
import AddressAdmin from "./AddressAdmin"
import { getAllLocalities } from "@/services/entities/locality/locatlity.service"

async function getData() {
    const addresses = await getAllAddresses()
    const localities = await getAllLocalities()
    return {addresses, localities}
}

async function Address() {

    const {addresses, localities} = await getData()

    return (
        <AddressAdmin addresses={addresses} localities={localities}/>
    )
}

export default Address