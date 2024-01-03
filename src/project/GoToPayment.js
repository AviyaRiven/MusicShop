import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ScrollUpBtn from "./ScrollUpBtn";


function GoToPayment() {
    const cart = useSelector((state) => state.cartReducer);
    const navigate = useNavigate();
    let totalPrice = 0;
     useEffect(() => {
        alert("are you sure you want to pay now?");
     },[])

    return(
        <>
        <button class="btn btn-primary" onClick={() => navigate("/")}><i class="bi bi-house-fill"></i> HOME</button>

        <table class="table" style={{fontFamily:"Cursive"}}>
            <thead class="table-dark">
                <tr>
                    <th>product</th>
                    <th>image</th>
                    <th>price</th>
                    <th>qty</th>
                </tr>
            </thead>
            <tbody class="table-dark">
                {cart.map((item) =>
                    <>
                    <tr>
                        <td>{item.name}</td>
                        <td><img src={item.img} style={{ width: "50px" }}></img></td>
                        <td>{item.price} * {item.qty}</td>
                        <td>{item.qty}</td>
                        
                        </tr>
                        <p style={{display :"none"}}>{totalPrice+=item.price*item.qty}</p>
                       </>
                )}
            </tbody>
        </table>
        <p style={{fontFamily:"Cursive"}}>The total price: {totalPrice}</p>
        <ScrollUpBtn></ScrollUpBtn>
</>
    )
}
export default GoToPayment;