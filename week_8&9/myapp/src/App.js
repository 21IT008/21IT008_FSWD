import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList";
import Mycart from "./component/Mycart";
import { BrowserRouter as Router, Routes ,Route, Link} from 'react-router-dom'
function App() {
  return (
    <>
       <Router>
       <li><Link to='/' >Product</Link></li>
       <li><Link to='/cart' >Cart</Link></li>
        <Routes>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/details/:id' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Mycart/>}></Route>
        </Routes>
       </Router>
    </>
  );
}


export default App;
