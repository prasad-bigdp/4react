import { createReducer } from '@reduxjs/toolkit'
import { Incr } from './Actions'
import { decr } from './Actions'
import { reset } from './Actions'

const initialState = { count: 0 }
const mainReducer = createReducer(initialState, (b) =>
{
    b.addCase(Incr, (state) =>
    {
        state.count+=1
    })
    b.addCase(decr, (state) =>
    {
        state.count-=1
    })
    b.addCase(reset, (state) =>
    {
        state.count = 0;
    })
})
export default mainReducer