// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage";
import StockPage from "./components/StockPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/stock" component={StockPage} />
        <Route path="/" component={PortfolioPage} />
      </Switch>
    </Router>
  );
}

export default App;