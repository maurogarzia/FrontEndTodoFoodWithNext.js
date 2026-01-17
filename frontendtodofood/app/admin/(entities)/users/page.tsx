import { getAllUsers } from "@/services/entities/users/users.service"
import UsersAdmin from "./UsersAdmin"
import { getAllAddresses } from "@/services/entities/address/address.service"

async function getData() {
  const users = await getAllUsers()
  const addresses = await getAllAddresses()

  return {users, addresses}
}

async function Users() {

  const {users, addresses} = await getData() 

  return (
    <UsersAdmin users={users} addresses={addresses}/>
  )
}

export default Users