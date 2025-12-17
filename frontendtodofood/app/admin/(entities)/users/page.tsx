import { getAllUsers } from "@/services/entities/users/users.service"
import UsersAdmin from "./UsersAdmin"

async function getData() {
  return await getAllUsers()
}

async function Users() {

  const users = await getData() 

  return (
    <UsersAdmin users={users}/>
  )
}

export default Users