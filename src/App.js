
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Navbar from "./components/Navbar";

function App() {

  return (
    
    <div className='App'>
          <BrowserRouter>
            <Navbar/>
            
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/product" element={<Product/>}/>
            </Routes>
            
          </BrowserRouter>
    </div>
    
  );
}

export default App;

//<TextField id="outlined-basic" label="E-mail" variant="outlined" />