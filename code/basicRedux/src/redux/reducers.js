const initialState = {
    count:0
}
function basicReducer (state=initialState,action)
{
    switch (action.type)
    {
        case "INCR": return {...state,count:state.count+1}
        case "DECR": return {...state,count:state.count-1}
        case "RESET": return {...state,count:0}
        default: return state
    }
}
export default basicReducer;