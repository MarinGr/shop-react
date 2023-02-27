import { createContext, useEffect, useState } from "react";
import categoriesData from "./data/categories";
import allProductsData from "./data/allProducts";
import specialOffersData from "./data/specialOffers";

const AppContext = createContext();

export function ContextProvider({ children }) {
  const categories = categoriesData;
  const specialOffers = specialOffersData;
  const [allProducts, setAllProducts] = useState(getInitialProductsData());
  const [searchTarget, setSearchTarget] = useState("");
  const trendingProducts = allProducts.filter((item) => item.trending === true);
  const [trending, setTrending] = useState(trendingProducts);
  const [cart, setCart] = useState(getInitialCartData());
  const favourites = allProducts.filter((item) => item.favourite === true);

  useEffect(() => {
    localStorage.setItem("productsData", JSON.stringify(allProducts));
  }, [allProducts]);

  useEffect(() => {
    setTrending(trendingProducts);
  }, [allProducts]);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cart));
  }, [cart]);

  function getInitialProductsData() {
    const productsData = localStorage.getItem("productsData");
    return productsData ? JSON.parse(productsData) : allProductsData;
  }

  function getInitialCartData() {
    const cartData = localStorage.getItem("cartData");
    return cartData ? JSON.parse(cartData) : [];
  }

  function addFavourite(item) {
    setAllProducts(
      allProducts.map((elem) =>
        elem.title === item.title ? { ...elem, favourite: true } : elem
      )
    );
  }

  function removeFavourite(item) {
    setAllProducts(
      allProducts.map((elem) =>
        elem.title === item.title ? { ...elem, favourite: false } : elem
      )
    );
  }

  function addToCart(item, amount) {
    const match = cart.find((elem) => elem.item.title === item.title);

    if (match) {
      match.quantity += amount;
      setCart(
        cart.map((elem) =>
          elem.item.title === item.title
            ? { ...elem, quantity: match.quantity }
            : elem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { item, quantity: amount }]);
    }
  }

  function updateAmount(item, amount) {
    setCart(
      cart.map((elem) =>
        elem.item.id === item.id ? { ...elem, quantity: amount } : elem
      )
    );
  }

  function removeFromCart(id) {
    const newCart = cart.filter((elem) => elem.item.id !== id);
    setCart(newCart);
  }

  return (
    <AppContext.Provider
      value={{
        categories,
        allProducts,
        specialOffers,
        cart,
        favourites,
        addToCart,
        removeFromCart,
        updateAmount,
        addFavourite,
        removeFavourite,
        trending,
        setTrending,
        searchTarget,
        setSearchTarget,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
