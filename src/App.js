
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    
    <div className='App'>
          <BrowserRouter>
            <Navbar/>
            
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/product/:id" element={<Product/>}/>
            </Routes>
            <Footer/>
          </BrowserRouter>
    </div>
    
  );
}

export default App;

//<TextField id="outlined-basic" label="E-mail" variant="outlined" />