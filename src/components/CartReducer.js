import {ACTIONS} from './CartItemContext'

export const sumItems = (cartItem) => {
    let itemCount = cartItem.reduce((total, item) => total + item.quantity, 0);
    let total = cartItem.reduce((total, item) => total + item.quantity * item.price, 0)
    return {itemCount, total}
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREASE:
            state.cartItem[state.cartItem.findIndex(state => state.sno === action.payload.sno)].quantity++
            return {
                ...state,
                ...sumItems(state.cartItem)
            }
            case ACTIONS.DECREASE:
                state.cartItem[state.cartItem.findIndex(state => state.sno === action.payload.sno)].quantity--
                return {
                    ...state,
                    ...sumItems(state.cartItem)
            }
        case ACTIONS.REMOVE_ITEM:
           
            
            return {
                ...state,
                ...sumItems(state.cartItem.filter(item=> item.sno !== action.payload.sno)),
                cartItem:[...state.cartItem.filter(item=> item.sno !== action.payload.sno)]
            }
        case ACTIONS.ADD_ITEM:
           !state.cartItem.find(item => item.sno === action.payload.sno)?state.cartItem.push({...action.payload, quantity: 1})  :console.log(`Already added ${state.cartItem.name}`) ;
            
            return {
                ...state,
                ...sumItems(state.cartItem),
                cartItem: [...state.cartItem]
            }
            
    
        default:
            break;
    }
}
