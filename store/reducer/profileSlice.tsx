import {createSlice} from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState:{
        name:'Fadli Nofrizal',
        email:'FadliNofri@gmail.com',
        phone:'',
        address:''
    },
    reducers: {
        setName: (state,action) =>{
            state.name = action.payload
        },
        setEmail: (state,action) =>{
            state.email = action.payload
        },
        setPhone: (state,action) =>{
            state.phone = action.payload
        },
        setAddress: (state,action) =>{
            state.address = action.payload
        },
    }
})

export const {
    setName,
    setEmail,
    setPhone,
    setAddress
}= profileSlice.actions
export default profileSlice.reducer