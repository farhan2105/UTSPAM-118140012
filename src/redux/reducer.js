import { createSlice } from '@reduxjs/toolkit';

export const studentSlice = createSlice({
    name: 'student',
    initialState: [],
    reducers: {
        addStudent: (state, action) => {
            const isStudentExist = state.findIndex((student) => student.name == action.payload.name) !== -1;
            const isInputEmpty = !!!action.payload.name;
            if (!isStudentExist && !isInputEmpty) state.push({ ...action.payload });
        },
    },
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
