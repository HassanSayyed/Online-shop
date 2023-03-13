import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/notFound/PageNotFound";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import About from "./pages/about/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductProvider from "./utils/context";
function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
