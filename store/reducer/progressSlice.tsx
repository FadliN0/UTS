import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
    completed: string[]; 
    scoreCorrectIds: string[];
}

const initialState: ProgressState = {
    completed: [],
    scoreCorrectIds: [],
};

const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
        addProgress: (state, action: PayloadAction<string>) => {
            if (!state.completed.includes(action.payload)) {
            state.completed.push(action.payload);
            }
        },
        addScore: (state, action: PayloadAction<{ key: string; isCorrect: boolean }>) => {
            if (action.payload.isCorrect && !state.scoreCorrectIds.includes(action.payload.key)) {
            state.scoreCorrectIds.push(action.payload.key);
            }
        },          
        resetProgress: (state) => {
            state.completed = [];
            state.scoreCorrectIds = [];
        },
    },
});

export const { addProgress, resetProgress,addScore } = progressSlice.actions;
export default progressSlice.reducer;
