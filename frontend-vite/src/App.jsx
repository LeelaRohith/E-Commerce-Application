import { ThemeProvider } from "@emotion/react";
import Navbar from "./customer/components/Navbar";
import customeTheme from "./Theme/customeTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/Product Details/ProductDetails";
import Review from "./customer/pages/Review/Review";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar></Navbar>
        {/* <Home></Home> */}
        {/* <Product /> */}
        {/* <ProductDetails></ProductDetails> */}
        <Review />
      </div>
    </ThemeProvider>
  );
}

export default App;
