import React, {useState} from "react"

import {User} from "../../types"
import Button from "../UI/Button"
import Card from "../UI/Card"

import classes from "./AddUser.module.css"

interface Props {}

const AddUser: React.FC<Props> = ({}) => {
  const [enteredUsername, setEnteredUsername] = useState<User["username"]>("")
  const [enteredAge, setEnteredAge] = useState<User["age"]>("")

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setEnteredUsername("")
    setEnteredAge("")
  }

  const usernameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(e.target.value)
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
