import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "interface";
import { RootState } from "store";
let initialState : IUser = {
  region  : "",
  dial_code : ""
}
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers  : {
    getRegion : (state , {payload} : PayloadAction<{region?  : string , dial_code?  : string} >) => {
      state.dial_code = payload.dial_code
      state.region = payload.region
    }
  }
})
export default userSlice.reducer
export const {getRegion} = userSlice.actions
export const useGetRegionUser = (state : RootState) => state.userSlice