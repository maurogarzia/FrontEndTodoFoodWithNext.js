import { getAllBranches } from "@/services/entities/branche/branche.service"
import BranchesAdmin from "./BranchesAdmin"

async function getData() {
  return await getAllBranches()
}

async function Branches() {

  const branches = await getData()

  return (
    <BranchesAdmin branches={branches}/>
  )
}

export default Branches