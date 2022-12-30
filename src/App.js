import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#f3f7ff",
      footer_bg: "#00252b",
      btn: "#3b80ff",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "rgba(0,0,0,0.02)0 1px 3px 0,rgba(27,31,35,0.15) 0 0 0 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0 1px 4px"
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </>
};

export default App;
