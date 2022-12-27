import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListProduct } from "./pages/ListProduct/ListProduct";
import { Login } from "./pages";
import { DetailProduct } from "./pages/DetailProduct";
import CrudProduct from "./pages/CrudProduct/CrudProduct";
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs";
import { LayoutContainer } from "./styled-components";
function App() {
  return (
    <>
      <LayoutContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<ListProduct />} />
            <Route path="/products/:id" element={<DetailProduct />} />
            <Route path="/product/:state" element={<CrudProduct />} />
            <Route path="*" element={<>PAGE NOT FOUND</>} />
          </Routes>
        </BrowserRouter>
      </LayoutContainer>
    </>
  );
}

export default App;
