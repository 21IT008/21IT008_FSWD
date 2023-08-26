function Productwrap(props) {
    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin:'auto',
        border: '2px solid black',
        width: '50%'
      };      
  
    return <div style={wrapperStyle}>{props.children}</div>;
  }
  
  export default Productwrap;