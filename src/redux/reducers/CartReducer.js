const cart = [];

const cartReducer = (state = cart, action) => {
    switch(action.type){
        case "ADDTOCART": {
            const index = state.findIndex(item => item.id === action.payload.id)
            if(index != -1){
                const tempArray = [...state];
                tempArray[index].qty=tempArray[index].qty+1;
                state = [...tempArray];
                return(state)
            }
            return[...state, action.payload]
            
        }
        case "DELETEFROMCART": {
            return state.filter(item => item.id !== action.payload)
        }

        case "DECREASEQTYFROMCART": {
            const index = state.findIndex(item => item.id === action.payload)
            const tempArray = [...state];
            tempArray[index].qty=tempArray[index].qty-1;
            state = [...tempArray];
            return(state)
        }

        case "ADDQTYTOCART": {
            const index = state.findIndex(item => item.id === action.payload)
            const tempArray = [...state];
            tempArray[index].qty=tempArray[index].qty+1;
            state = [...tempArray];
            return(state)
        }
    }

    return state;
};

export default cartReducer;

