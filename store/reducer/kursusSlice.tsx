import {createSlice} from '@reduxjs/toolkit';

export const kursusSlice = createSlice({
    name: 'kursus',
    initialState: {
        data: [],
    },
    reducers: {
        setKursus: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {setKursus} = kursusSlice.actions;
export default kursusSlice.reducer;