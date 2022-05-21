import { createSlice } from '@reduxjs/toolkit'

export const responseListSlice = createSlice({
    name: 'responseList',
    initialState: [],
    reducers: {
        addPrompt: (state, action) => {
            state.push({ prompt: action.payload })
        },
        addResponse: (state, action) => {
            const lastIdx = state.length -1
            state[lastIdx].response = action.payload
        },
        concatPromptResponse: (state, action) => {
            const lastIdx = state.length -1
            const concat = state[lastIdx].prompt + "\n\n" + state[lastIdx].response
            state[lastIdx].concat = concat

        }
    }
})

export const selectLast = state => {
    const lastIdx = state.length -1
    return state[lastIdx]
}

export const { addPrompt, addResponse, concatPrompResponse } = responseListSlice.actions

export default responseListSlice.reducer

