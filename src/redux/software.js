import { createSlice } from '@reduxjs/toolkit'

const softwareSlice = createSlice({
  name: 'software',
  initialState: [],
  reducers: {
    getSoftware() {},
    setSoftware(state, action) {
        const softwareData = action.payload;
        return {...state, softwareData};
    }
  }
});

export const { getSoftware, setSoftware } = softwareSlice.actions

export default softwareSlice.reducer