import { createSlice } from '@reduxjs/toolkit'
import type { UserProps } from 'modules/types'


const initialState: UserProps = {
  token: '',
  refreshToken: '',
  validUntil: '',
  user: {
    username: '',
    fullname: '',
    email: '',
    phone: '',
    userCode: '',
    origin: '',
    info1: '',
    info2: '',
    info3: '',
    type: '',
    memberID: '',
    member: '',
    roles: [],
    roleName: '',
    id: '',
    status: '',
    createdDate: '',
    lastModifiedDate: '',
    createdBy: '',
    lastModifiedBy: '',
    remark: ''
  }
}

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    getUser: (state, action) => (state = action.payload)
  }
})

export const { getUser } = UserSlice.actions
export default UserSlice.reducer
