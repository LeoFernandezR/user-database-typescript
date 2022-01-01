import React from "react"
import ReactDOM from "react-dom"

import Button from "./Button"
import Card from "./Card"
import classes from "./ErrorModal.module.css"

interface BackdropProps {
  closeErrorModal: VoidFunction
}
interface Props extends BackdropProps {
  title: string
  message: string
}

const Backdrop: React.FC<BackdropProps> = ({closeErrorModal}) => {
  return <div className={classes.backdrop} onClick={closeErrorModal} />
}

const ModalOverlay: React.FC<Props> = ({closeErrorModal, message, title}) => {
  return (
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
  )
}

const ErrorModal: React.FC<Props> = ({title, message, closeErrorModal}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeErrorModal={closeErrorModal} />,
        document.getElementById("backdrop-root") as Element,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay closeErrorModal={closeErrorModal} message={message} title={title} />,
        document.getElementById("overlay-root") as Element,
      )}
    </>
  )
}

export default ErrorModal
