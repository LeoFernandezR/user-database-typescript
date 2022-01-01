interface User {
  id: number | string
  username: string
  age: number
}

interface ErrorData {
  title: string
  message: string
}

export type {User, ErrorData}
