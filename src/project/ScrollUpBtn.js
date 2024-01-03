import React from "react";
import { useEffect,useState } from "react";

function ScrollUpBtn(){
    const [backToTopBtn, setBackToTopBtn] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 150){
                setBackToTopBtn(true);
            }
            else{
                setBackToTopBtn(false);

            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
        

    }
    return <div>
    {backToTopBtn &&(
        <button style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            color: "white",
            border: "white",
            borderRadius: "50%",
            backgroundColor:"rgb(72, 43, 25)"

        }} onClick={scrollUp} ><i class="bi bi-arrow-up-circle"></i></button>
    )}
    

    </div>
}
export default ScrollUpBtn;
