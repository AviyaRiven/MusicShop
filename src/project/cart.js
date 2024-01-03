import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFromCart } from "../redux/actions/CartActions";
import ScrollUpBtn from "./ScrollUpBtn";
import { decreaseQty } from "../redux/actions/productAction";
import { addQty } from "../redux/actions/productAction";
import { addQtyToCart } from "../redux/actions/CartActions";
import { decreaseQtyFromCart } from "../redux/actions/CartActions";
import OutOfStockModal from "./outOfStockModal";
import { isOutOfStock } from "../redux/actions/productAction";

function CartDetails() {
    const cart = useSelector((state) => state.cartReducer)
    const products = useSelector((state) => state.productReducer)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (<>
        {/* <button class="btn btn-primary" onClick={() => navigate(-1)}><i class="bi bi-house-fill"></i> HOME</button> */}
        <table class="table" style={{ fontFamily: "Cursive" }}>
            <thead class="table-dark">
                <tr>
                    <th>product</th>
                    <th>image</th>
                    <th>price</th>
                    <th>qty</th>
                    <th></th>
                </tr>
            </thead>
            <tbody class="table-dark">
                {cart.map((item) => <>
                    <tr>
                        <td>{item.name}</td>
                        <td><img src={item.img} style={{ width: "50px" }}></img></td>
                        <td>{item.price}</td>
                        <td>
                            <button class="btn btn-primary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addQty({ id: item.id, qty: 1 }))
                                    dispatch(decreaseQtyFromCart(item.id))
                                }} disabled={item.qty === 1}>
                                <i class="bi bi-dash-circle"></i></button>
                            {" " + item.qty + " "}
                            <button class="btn btn-primary"
                                onClick={
                                    (e) => {
                                        // const index = products.findIndex(product => product.id === item.id)
                                        // if(products[index].qty===0){
                                        //     document.getElementById(item.id).disabled = true;
                                        // }

                                        // document.getElementById(item.id).disabled = false;
                                        e.preventDefault();
                                        dispatch(decreaseQty(item.id))
                                        dispatch(addQtyToCart(item.id))
                                    }
                                } id={item.id} disabled={products[products.findIndex(product => product.id === item.id)].qty === 0}>
                                <i class="bi bi-plus-circle" ></i></button></td>

                        <td><button onClick={(e) => {
                            e.preventDefault();
                            dispatch(addQty({ id: item.id, qty: item.qty }))
                            dispatch(deleteFromCart(item.id));


                        }} class="btn btn-primary"><i class="bi bi-trash3-fill"></i></button> </td>
                    </tr>


                </>)}
            </tbody>
        </table>
        <button class="btn btn-primary" onClick={() => navigate("/payment")}>Go to payment</button>
        <ScrollUpBtn />

    </>)

}
export default CartDetails;
