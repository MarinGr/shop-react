import "./App.css";
import { ContextProvider } from "./AppContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import SearchResults from "./pages/SearchResults";
import AllCategories from "./pages/AllCategories";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Favourites from "./pages/Favourites";
import Cart from "./pages/Cart";
import Articles from "./pages/Articles";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ContextProvider>
      <HashRouter>
        <ScrollToTop />
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/categories/:id" element={<Category />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/articles" element={<Articles />} />
          </Routes>
          <Footer />
        </Container>
      </HashRouter>
    </ContextProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
