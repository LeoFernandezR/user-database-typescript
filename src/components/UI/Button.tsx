import React from "react"

import classes from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

const Button: React.FC<Props> = ({children, className, ...buttonProps}) => {
  return (
    <button className={`${classes.button} ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}

export default Button
