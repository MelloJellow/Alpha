import Login  from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Admin from "./pages/Admin";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
import Exchange from "./pages/Exchange";

const App = () => {
  return(
   <Router>
    {/* Toast Container (Global Notifications) */}
    <ToastContainer
      position="bottom-right"
      autoClose={3000} // 3s auto close
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable={false}
    />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/chat" element={<Chat />}/>
      <Route path="/search" element={<Search />}/>
      <Route path="/exchange" element={<Exchange />}/>
    </Routes>
  </Router>
  );
};

export default App;