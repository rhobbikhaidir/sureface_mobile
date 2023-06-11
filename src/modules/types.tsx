export type Children = {
  children?: React.ReactNode
}

export type ResultProps = {
  status: boolean | string
  message: string
  data: string | object
}

export type ErrorProps = {
  data: ExceptionProps
  status: number
}

export type ErrorFetchProps = {
  error: string
  message: string
  status: string
}

export type ExceptionProps = {
  Message: string
  Status: number
}

export type UserProps = {
  token: string
  refreshToken: string
  validUntil: string
  user: UserDataProps
}

export type UserDataProps = {
  username: string
  fullname: string
  email: string
  phone: string
  userCode: string
  origin: string
  info1: string
  info2: string
  info3: string
  type: string
  memberID: string
  member: string
  roles: UserRoleProps[]
  roleName: string
  id: string
  status: string
  createdDate: string
  lastModifiedDate: string
  createdBy: string
  lastModifiedBy: string
  remark: string
}

export type UserRoleProps = {
    name: string
    description: null
    permissions: string[]
    id: string
    status: string
    createdDate: string
    lastModifiedDate: string
    createdBy: string
    lastModifiedBy: string
    remark: string
  }
