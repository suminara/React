import { BrowserRouter, Routes, Route, Link, useLocation, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/products/:id">Product</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/user">User</Link>
      <Link to="/user/coupon">Coupon</Link>
      <Link to="/user/question">Question</Link>
      <Link to="/user/notice">Notice</Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products/:id" element={<Product />}>
          <Route path="/products/:id/notice" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />}/>
        
        <Route path="/user/*" element={<Outlet />}>
          <Route path="" element={<User />}/>
          <Route path="coupon/" element={<Coupon />}/>
          <Route path="question/" element={<Question />}/>
          <Route path="notice/" element={<Notice />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function HomePage(){
  return <h1>Home Page</h1>
}

function Product(){
  const location = useLocation();
  console.log(location)
  return <h1>Product Detail Page</h1>
}

function Cart(){
  return <h1>Cart Page</h1>
}

function Coupon(){
  return <h1>Coupon Page</h1>
}

function Question(){
  return <h1>Question Page</h1>
}

function Notice(){
  return <h1>Notice Page</h1>
}

function User(){
  return <h1>User Page</h1>
}
export default App;
