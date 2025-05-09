import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer/counterSlice'
import profileSlice from './reducer/profileSlice'
import progressSlice from './reducer/progressSlice'

export default configureStore({
reducer: {  counter: counterSlice, 
            profile: profileSlice,
            progress: progressSlice,
        },
})