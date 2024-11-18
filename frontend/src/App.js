import { ThemeProvider } from "@emotion/react";
import Navbar from "./customer/components/Navbar";
import customeTheme from "./Theme/customeTheme";
import Home from "./customer/pages/Home/Home";
import Product from "./customer/pages/Product/Product";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar></Navbar>
        {/* <Home></Home> */}
        <Product />
      </div>
    </ThemeProvider>
  );
}

export default App;
