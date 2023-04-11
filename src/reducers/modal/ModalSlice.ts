import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IMentor } from "utils/data";

interface IModalState {
  nameModal  : string 
  dataModal?: any
  onClose? : any
  action? : any
}

const initialState   = {
  nameModal : "",
  dataModal : {} ,

} as IModalState

const modalSlice = createSlice({
  name : "modalSlice",
  initialState,
  reducers  : {
    openModal : (state ,action :  PayloadAction<IModalState>) => {
        return {
          ...action.payload
        }
    },
    closeModal : () => {
      return initialState
    }
  }
})
export const {openModal , closeModal} = modalSlice.actions
export default modalSlice.reducer