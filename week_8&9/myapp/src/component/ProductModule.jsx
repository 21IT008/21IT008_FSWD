import './myproduct.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React, { useState } from 'react';
let cartitems=[];
function ProductModule(props) {
    let count=cartitems.findIndex((item)=>(item.id==props.p.id))
    let [quan,setquan]=useState(1)
    function addtocart() {
        console.log(count)
        setquan(quan+1)
        if(count>-1){
            cartitems[count].quantity+=1
            console.log( "addtocart",cartitems[count].quantity)
        }
        else{
        cartitems=[...cartitems.concat(props.p)]
        }
    }
    function manage(e){
        console.log("manage called")
        if(e.target.value=="inc"){
            setquan(quan+1)
            console.log("inc called")
            cartitems[count].quantity+=1
            console.log( cartitems[count].quantity)
        }
        else{
            setquan(quan-1)
            cartitems[count].quantity-=1
            console.log( cartitems[count].quantity)
        }
        }
    function remove(){
        cartitems.splice(count,1);
    }  
    return (  
        <> 
        <div className='product-card'>
                <img className='product-img' src={'%PUBLIC_URL%',props.p.image} alt="loading.." />
                <h2 className='product-title '>Name : {props.p.name}</h2>
                <h4 className='product-price'>Price : RS. {props.p.price} </h4>
                <h4 className='product-price'>Discount : {props.p.discount}</h4>
                {!props.de && <h4>{props.p.details}</h4>}
                {props.q && <h4>Quantity : {props.p.quantity==1?"":<button value="dec" onClick={manage}>-</button>} {props.p.quantity} <button value="inc" onClick={manage}>+</button></h4>}
                {props.q && <button onClick={remove}>Remove</button>}
                {props.de && <button><Link to={`/details/${props.p.id}`}>details</Link></button>}{' '}
                {props.cart && <button onClick={addtocart} className='addtocart-btn'><Link to={`/cart`}>Add to cart</Link></button>}
            </div>
            <br />
           
        </>
    );
    
}

// Exporting cartitems as a named export.
export {cartitems};
export default ProductModule;
