import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage ,SignupPage,Home ,CreateProduct,MyProducts, ProductDetails,CreateAddress} from "./Routes";

import "./App.css";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/create-product' element = {<CreateProduct/>}/>
        <Route path='/create-product/:id' element = {<CreateProduct/>}/>
        <Route path='/my-products' element = {<MyProducts/>}/>
        <Route path='/product/:id'element={<ProductDetails/>}/>
        <Route path='/create-adress'element={<CreateAddress/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;