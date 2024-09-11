// src/components/PortfolioPage.js
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { List, Input, Button } from "antd";
import portfolioStore from "../stores/PortfolioStore";

const PortfolioPage = observer(() => {
  const [newStock, setNewStock] = useState("");

  useEffect(() => {
    portfolioStore.fetchPortfolio("KenzoSuzuki");
  }, []);

  const handleAddStock = () => {
    portfolioStore.updatePortfolio("KenzoSuzuki", [
      ...portfolioStore.portfolio.stocks,
      newStock,
    ]);
    setNewStock("");
  };

  return (
    <div>
      <h1>Portfolio</h1>
      <List
        header={<div>Your Stocks</div>}
        bordered
        dataSource={portfolioStore.portfolio.stocks || []}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Input
        value={newStock}
        onChange={(e) => setNewStock(e.target.value)}
        placeholder="Add Stock Symbol"
      />
      <Button onClick={handleAddStock}>Add Stock</Button>
    </div>
  );
});

export default PortfolioPage;
