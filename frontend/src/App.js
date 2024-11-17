import { ThemeProvider } from "@emotion/react";
import Navbar from "./customer/components/Navbar";
import customeTheme from "./Theme/customeTheme";
import Home from "./customer/pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
