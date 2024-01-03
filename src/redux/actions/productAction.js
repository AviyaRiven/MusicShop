export const decreaseQty = (id) => {
    return {
        type: "DECREASEQTY",
        payload: id
    };
};

export const addQty = (idAndQty) => {
    return {
        type: "ADDQTY",
        payload: idAndQty
    };
};

