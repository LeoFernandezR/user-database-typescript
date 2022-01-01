import React, {useState} from "react"

import ErrorModal from "./components/UI/ErrorModal"
import AddUser from "./components/Users/AddUser"
import UserList from "./components/Users/UserList"
import {ErrorData, User} from "./types"

interface Props {}

const App: React.FC<Props> = ({}) => {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<ErrorData>({
    title: "",
    message: "",
  })

  const hasBeenSentAnError = error.title.length > 0 && error.message.length > 0

  const cleanErrorData = () => {
    setError({title: "", message: ""})
  }

  const handleAddNewUser = (newUser: User) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser]
    })
  }

  return (
    <div>
      {hasBeenSentAnError && <ErrorModal {...error} closeErrorModal={cleanErrorData} />}
      <AddUser addNewUser={handleAddNewUser} showErrorModal={setError} />
      <UserList users={users} />
    </div>
  )
}

export default App
