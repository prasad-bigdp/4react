import { createAction } from '@reduxjs/toolkit'
export const Incr = createAction('increment')
export const decr = createAction("decrement")
export const reset = createAction('reset')
