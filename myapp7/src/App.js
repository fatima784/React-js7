import logo from './logo.svg';
import './App.css';
import Product from "./components/productCard";
import img1 from "./components/images/car.jpg"




function App() {
  return (
    <Product name = "Honda" price ={100000}
    img src={img1}/>
  );
}

export default App;
