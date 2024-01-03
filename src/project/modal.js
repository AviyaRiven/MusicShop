import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/CartActions';
import { decreaseQty } from '../redux/actions/productAction';
import OutOfStockModal from './outOfStockModal';

function ProductDetailsModal(props) {
    const [show, setShow] = useState(false);
    const [showOutOfStockModal, setShowOutOfStockModal] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [icon, setIcon] = useState("bi bi-cart-plus-fill");
    const dispatch = useDispatch()


    return (
        <>
            
            <button class="button-57" role="button" onClick={handleShow}><span class="text"><i class="bi bi-info-circle-fill"></i></span><span><i class="bi bi-info-circle-fill">more...</i></span></button>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.product.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={props.product.img} style={{ width: "70px" }}></img>
                    <b>description: </b> {props.product.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        setIcon("bi bi-cart-check-fill")
                        if (props.product.qty === 0) {
                            setShowOutOfStockModal(true);
                            console.log("out of stock");
                            handleClose();
                        }
                        else {
                            e.preventDefault();
                            dispatch(addToCart({ ...props.product, qty: 1 }));
                            dispatch(decreaseQty(props.product.id));

                        }

                    }}><i class={icon}></i></Button>
                </Modal.Footer>
            </Modal>
           <OutOfStockModal
                show={showOutOfStockModal}
                product={props.product}
                />          

        </>
    );
}

export default ProductDetailsModal;