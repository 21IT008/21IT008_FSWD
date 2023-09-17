import './myproduct.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ProductModule from "./ProductModule";
import products from "./productarray";
import { useParams } from 'react-router-dom';
function ProductDetails() {
     const {id}=useParams();
     console.log(id); 
     const product=products.find(product => product.id==id);   
    return ( 
      <>
      <h2>Product Detail</h2>
      <Link to='/'><h1>&larr;</h1></Link>
      <ProductModule p={product} cart={true} de={false}/>
      </>    
    );
}

export default ProductDetails;