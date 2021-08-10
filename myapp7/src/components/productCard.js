import React from "react";
import "./productCard.css"


function Product({name, price, src}){
    return(
   <div className = "box">
       <img src = {src} alt= "car" />
    
       <h2>{name}</h2>
       <p>Price {price}</p>
   </div>
    )
}
  export default Product;  