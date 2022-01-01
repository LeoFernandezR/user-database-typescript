import React from "react"

import {User} from "../../types"
import Card from "../UI/Card"

import classes from "./UserList.module.css"

interface Props {
  users: User[]
}

const UserList: React.FC<Props> = ({users}) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.username}</p>
            <p>{user.age} years old</p>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UserList
