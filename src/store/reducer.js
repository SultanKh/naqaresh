export const ACTIONS = {
    SET_LIST: 'set_list',
    ADD_ORDER: 'ADD_ORDER',
    REMOVE_ORDER: 'remove_order'
}
const initialState = {
    foodOrders: []
}
const reducer = (state = initialState, action) => {
    if (!action.payload) return state;

    if (action.type === ACTIONS.ADD_ORDER) {
        if(state.foodOrders.findIndex(item => item.id === action.payload.id) === -1) {
            return { ...state, foodOrders: [...state.foodOrders, { ...action.payload }] }
        }
        return state
    }
    if (action.type === ACTIONS.REMOVE_ORDER) {
        if(!action.payload.id)  return state
        return { foodOrders: state.foodOrders.filter(item => item.id !== action.payload.id) }
    }
    else return state
}

export default reducer;