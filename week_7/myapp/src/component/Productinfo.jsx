function Productinfo(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>${props.price}</p>
      </div>
    );
  }
  export default Productinfo;
  