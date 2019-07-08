import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page_Wrapper from "./components/Page_Wrapper";
import "./app.css";


function App() {
  return (
    <Router>
      <>
        <Page_Wrapper>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved/" component={Saved} />
            <Route exact path="/saved/:id" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </Page_Wrapper>
        <Footer />
      </>
    </Router>
  );
}

export default App;
