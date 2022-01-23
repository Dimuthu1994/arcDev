import { CssBaseline } from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { useState } from "react";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            path="/customSoftware"
            component={() => <div>Custom Software</div>}
          />
          <Route path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route path="/websites" component={() => <div>Web sites</div>} />
          <Route
            path="/revolutions"
            component={() => <div>The Revoluton</div>}
          />
          <Route exact path="/about" component={() => <div>About us</div>} />
          <Route path="/contacts" component={() => <div>Contacts Us</div>} />
          <Route path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
