import React, {useState} from "react"

import {User} from "../../types"
import Button from "../UI/Button"
import Card from "../UI/Card"

import classes from "./AddUser.module.css"

interface Props {
  addNewUser: (newUser: User) => void
}

const AddUser: React.FC<Props> = ({addNewUser}) => {
  const [enteredUsername, setEnteredUsername] = useState<User["username"]>("")
  const [enteredAge, setEnteredAge] = useState<User["age"]>(0)

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (enteredUsername.trim().length === 0 || enteredAge < 1) {
      return
    }

    addNewUser({
      username: enteredUsername,
      age: enteredAge,
      id: Math.random().toString(),
    })

    setEnteredUsername("")
    setEnteredAge(0)
  }

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(parseInt(e.target.value))
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input id="age" name="age" type="text" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
