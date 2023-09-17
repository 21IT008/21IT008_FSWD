import ProductModule from "./ProductModule";
import products from "./productarray";

function ProductList() {
    
     return ( <>
     <h2>Product List</h2>
          {products.map((product) => (
              <ProductModule p={product} cart={true} de={true}/>
         )
         )}
         </>
          
      );
}

export default ProductList;