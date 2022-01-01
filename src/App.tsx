import React, {useState} from "react"

import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"
import {User} from "./types"

interface Props {}

const App: React.FC<Props> = ({}) => {
  const [users, setUsers] = useState<User[]>([])

  const handleAddNewUser = (newUser: User) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser]
    })
  }

  return (
    <div>
      <AddUser addNewUser={handleAddNewUser} />
      <UserList users={users} />
    </div>
  )
}

export default App
