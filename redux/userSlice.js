
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: null,
  firstName: null,
  lastName: null,
    email: null,
    uid: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    phone: null,
    stateid: null,
    username: null,

}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.username = action.payload.username
        state.email = action.payload.email
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.uid = action.payload.uid
        state.address = action.payload.address
        state.state = action.payload.state
        state.zip = action.payload.zip
        state.city = action.payload.city
        state.phone = action.payload.phone
        state.stateid = action.payload.stateid
    },
    signOutUser : (state) =>{
      state.name = null
      state.firstName = null
      state.lastName = null
      state.email = null
      state.uid = null
      state.address = null
      state.city = null
      state.state = null
      state.zip = null
      state.phone = null
      state.stateid = null
    },
  }
    
});

export const { setUser, signOutUser } = userSlice.actions

export default userSlice.reducer