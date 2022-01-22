import { CssBaseline } from "@mui/material";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>Home</div>}
          />
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
