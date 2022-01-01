import React, {useState} from "react"

import {ErrorData, User} from "../../types"
import Button from "../UI/Button"
import Card from "../UI/Card"

import classes from "./AddUser.module.css"

interface Props {
  addNewUser: (newUser: User) => void
  showErrorModal: (errorData: ErrorData) => void
}

const AddUser: React.FC<Props> = ({addNewUser, showErrorModal}) => {
  const [enteredUsername, setEnteredUsername] = useState<User["username"]>("")
  const [enteredAge, setEnteredAge] = useState<User["age"]>(0)

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (enteredUsername.trim().length === 0) {
      return showErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid name(non-empty values)",
      })
    }

    if (enteredAge < 1) {
      return showErrorModal({
        title: "Invalid Input",
        message: "Please enter a valid age(> 0)",
      })
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
    const age = parseInt(e.target.value) || 0

    setEnteredAge(age)
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
