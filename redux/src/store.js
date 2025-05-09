import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// simulating api calls
export const addIncrementDelay = createAsyncThunk(
  'counter/incrementAsync',
  async (payload, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return payload
  }
)

export const addDecrementDelay = createAsyncThunk(
  'counter/decrementAsync',
  async (payload, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return payload
  }
)

// reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementBy: (state, action) => {
      state.count += action.payload
    },
    decrementBy: (state, action) => {
      state.count -= action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addIncrementDelay.fulfilled, (state, action) => {
        state.count += action.payload
      })
      .addCase(addDecrementDelay.fulfilled, (state, action) => {
        state.count -= action.payload
      })
  },
})

export const { incrementBy, decrementBy } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer,
})

export default store
