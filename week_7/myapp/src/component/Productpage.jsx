import Productimage from "./Productimage";
import Productinfo from "./Productinfo";
import Productwrap from "./Productwrap";
function Productpage() {
    const product = {
      name: 'Cool Gadget',
      description: 'A cool gadget you might like.',
      price: '99.99',
      imageUrl: '/logo192.png'
    };
  
    return (
      <div>
        <Productwrap>
        <Productimage src={product.imageUrl} alt={product.name} />
        <Productinfo 
          name={product.name} 
          description={product.description} 
          price={product.price} 
        />
        </Productwrap>
      </div>
    );
  }
  
  export default Productpage;
  