import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/CartActions";
import { decreaseQty } from "../redux/actions/productAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductDetailsModal from "./modal";
import ScrollUpBtn from "./ScrollUpBtn";
import OutOfStockModal from "./outOfStockModal"; 
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Shop() {
    const products = useSelector((state) => state.productReducer)
    const cart = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState({});
    // const [icon, setIcon] = useState("bi bi-cart-plus-fill");


    return (<>
        <button class="button-57" onClick={() => navigate("/cart")}><span><i class="bi bi-cart-fill"></i> CART</span><span>CART<i class="bi bi-arrow-right-short"></i><i class="bi bi-arrow-right-short"></i><i class="bi bi-arrow-right-short"></i></span></button>
        <div class="card-grid">
            {products.map((item) => <>
                <div class="card" >
                    <img class="card-img-top" src={item.img} alt="Card image cap" ></img>
                    <div class="card-body">
                        <h5 class="card-title" style={{ color: "black",fontFamily:"Cursive" }}>{item.name}</h5>
                        {/* <button class="btn btn-primary btn-lg btn-block" onClick={(e) => {
                            // setIcon("bi bi-cart-check-fill")
                            if (item.qty === 0) {
                                setShow(true);
                                setProduct(item);
                            }
                            else {
                                e.preventDefault();
                                dispatch(addToCart({...item, qty: 1 }));
                                dispatch(decreaseQty(item.id));
                                document.getElementById(item.id).innerHTML= `<i class="bi bi-cart-check-fill"></i>`;
                            }

                        }} id={item.id}> <i class="bi bi-cart-plus-fill" ></i>
                        </button> */}
                        <button class="button-57" role="button" onClick={(e) => {
                            // setIcon("bi bi-cart-check-fill")
                            if (item.qty === 0) {
                                setShow(true);
                                setProduct(item);
                            }
                            else {
                                e.preventDefault();
                                dispatch(addToCart({...item, qty: 1 }));
                                dispatch(decreaseQty(item.id));
                                // document.getElementById(item.id).innerHTML= `<i class="bi bi-cart-check-fill"></i>`;
                            }
                        }
                    }

                        ><span class="text"><i class="bi bi-cart-plus-fill" ></i></span><span><i class="bi bi-cart-check-fill"> buy!</i></span></button>

                        
                        <ProductDetailsModal product={item}></ProductDetailsModal>



                    </div>
                </div>

            </>)}

        </div>
        <OutOfStockModal
                                    show={show}
                                    // onHide={() => setShow(false)}
                                    product={product}
                                />
        <ScrollUpBtn />

    </>)
}
export default Shop;


