import { configureStore } from '@reduxjs/toolkit'
import responseListSlice from './Components/ResponseList/responseListSlice'

export const store = configureStore({
        responseList: responseListSlice 
})

export default store