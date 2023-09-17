import ProductModule from "./ProductModule";
import { cartitems } from "./ProductModule";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function Mycart() {
    let l=cartitems.length
    return (  
        <>
        <h2>My Cart</h2>
        {l>0?<Link to='/'><h1>&larr;</h1></Link>:<h2>Cart is empty</h2>}
        {cartitems.map((product) => (
            <ProductModule p={product} cart={false} de={true} q={true}/>
        )
        )}
        </>
    );
}

export default Mycart;