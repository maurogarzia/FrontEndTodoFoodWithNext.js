import { getAllBranches } from "../../../../services/entities/branche/branche.service"
import BranchesAdmin from "./BranchesAdmin"
import { getAllAddresses } from "../../../../services/entities/address/address.service"

async function getData() {
  const branches = await getAllBranches()
  const addresses = await getAllAddresses()

  return {branches, addresses}
}

async function Branches() {

  const {branches, addresses} = await getData()

  return (
    <BranchesAdmin branches={branches} addresses={addresses}/>
  )
}

export default Branches