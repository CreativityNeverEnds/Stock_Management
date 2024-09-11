// src/components/StockPage.js
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import portfolioStore from "../stores/PortfolioStore";

const StockPage = observer(({ symbol }) => {
  const [data, setData] = useState([]);
  const getStockList = async () => {
    const datas = await portfolioStore.fetchStockQuote();
    console.log(datas, "datas");
    setData(datas);
  };
  useEffect(() => {
    getStockList();
  }, [symbol]);
  console.log(data, "data");
  return (
    <div>
      {data?.length > 0 &&
        data?.map((item) => (
          <>
            <h1>Stock: {item.symbol}</h1>
            <p>Name: {item.name}</p>
            <p>Latest Price: {item.price}</p>
          </>
        ))}
    </div>
  );
});

export default StockPage;
