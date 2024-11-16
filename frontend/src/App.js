import { ThemeProvider } from "@emotion/react";
import Navbar from "./customer/components/Navbar";
import customeTheme from "./Theme/customeTheme";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <div>
        <Navbar></Navbar>
      </div>
    </ThemeProvider>
  );
}

export default App;
