import { configureStore } from '@reduxjs/toolkit';
import StudentReducer from './reducer';

export default configureStore({
    reducer: {
        students: StudentReducer,
    },
});
