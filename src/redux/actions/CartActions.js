
export const addToCart = (product) => {
    return{
        type: "ADDTOCART",
        payload: product
    }
}

export const deleteFromCart = (id) => {
    return{
        type: "DELETEFROMCART",
        payload: id
    }
}

export const decreaseQtyFromCart = (id) => {
    return {
        type: "DECREASEQTYFROMCART",
        payload: id
    };
};

export const addQtyToCart = (id) => {
    return {
        type: "ADDQTYTOCART",
        payload: id
    };
};

