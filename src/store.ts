import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import ModalSlice from "reducers/modal/ModalSlice";
import { useDispatch } from 'react-redux'
import mentorsApi from "reducers/mentors/MentorSlice";

export const store = configureStore({
  reducer : {
    modalSlice : ModalSlice,
    [mentorsApi.reducerPath] : mentorsApi.reducer
   },
   middleware : getDefaultMiddleware => getDefaultMiddleware().concat(mentorsApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 