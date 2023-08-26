import '../App.css';
export default function Mybutton(){
    function Handleclick(){
        alert("don't Click me!");
    }
    return(
        <button onClick={Handleclick} className='Mytext'>click me</button>
    );
}
