import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ModalSlice from "reducers/modal/ModalSlice";
import { useDispatch } from 'react-redux'
import mentorsApi from "reducers/mentors/MentorSlice";
import codeApi from "sever/code-region-api/codeApi";
import userSlice from "reducers/user/userSlice";

export const store = configureStore({
  reducer : {
    modalSlice : ModalSlice,
    [mentorsApi.reducerPath] : mentorsApi.reducer,
    [codeApi.reducerPath] : codeApi.reducer,
    userSlice : userSlice
   },
   middleware : getDefaultMiddleware => getDefaultMiddleware().concat(mentorsApi.middleware).concat(codeApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 