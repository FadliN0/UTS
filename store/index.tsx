import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducer/counterSlice'
import profileSlice from './reducer/profileSlice'
import progressSlice from './reducer/progressSlice'
import  kursusSlice  from './reducer/kursusSlice'

export default configureStore({
reducer: {  counter: counterSlice, 
            profile: profileSlice,
            progress: progressSlice,
            kursus: kursusSlice
        },
})