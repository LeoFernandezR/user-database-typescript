import React from "react"

import Button from "./Button"
import Card from "./Card"
import classes from "./ErrorModal.module.css"

interface Props {
  title: string
  message: string
  closeErrorModal: VoidFunction
}

const ErrorModal: React.FC<Props> = ({title, message, closeErrorModal}) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={closeErrorModal} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={closeErrorModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal
