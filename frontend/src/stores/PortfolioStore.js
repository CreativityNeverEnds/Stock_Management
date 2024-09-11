// src/stores/PortfolioStore.js
import { observable, action, makeObservable } from "mobx";
import axios from "axios";

class PortfolioStore {
  portfolio = {};
  stockQuote = {};

  constructor() {
    makeObservable(this, {
      portfolio: observable,
      stockQuote: observable,
      fetchPortfolio: action,
      updatePortfolio: action,
      fetchStockQuote: action,
    });
  }

  async fetchPortfolio(username) {
    const response = await axios.get(
      `http://localhost:5000/portfolio/${username}`
    );
    this.portfolio = response.data;
  }

  async updatePortfolio(username, stocks) {
    await axios.post("http://localhost:5000/portfolio/update", {
      username,
      stocks,
    });
    this.portfolio.stocks = stocks;
  }

  async fetchStockQuote() {
    const response = await axios.get(`http://localhost:5000/stocks/`);
    return response.data;
  }
}

const portfolioStore = new PortfolioStore();
export default portfolioStore;
