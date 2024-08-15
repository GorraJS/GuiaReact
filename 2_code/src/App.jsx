import { useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState('')
  const [productos, setProductos] = useState([])

  const getWeb = () => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      
    };
    
    const handleproducts = (e) => {
      setProduct(e.target.value)
    }
    
    const submit = (e) => {
      e.preventDefault()
      getWeb()
  }

  return (
    <>
      <form>
        <h1>Tienda Online</h1>
        <input type="text" value={product} onChange={handleproducts}></input>
        <h1 />
        <button type="submit" onClick={submit}>buscar</button>
      </form>
    </>
  );
}

export default App;
