import { useState } from "react";
import MainPage from "../_pages/MainPage";
import { TransactionPage } from "../_pages/TransactionPage";
import { BalancePage } from "../_pages/BalancePage";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);

  const addTransaction = (transaction, transType) => {
    if (transType === 'costs') {
      setCosts(prevCosts => { return [...prevCosts, ...transaction] });
      if (transType === 'incomes') {
        setIncomes(prevIncomes => { return [...prevIncomes, ...transaction] });
      };
    };
  };
  const toggleActivePage = (activePage = "") => {
    setActivePage(activePage);
  };
  switch (activePage) {
    case "costs":
      return <TransactionPage addTransaction = {addTransaction} closeActivePage = {toggleActivePage} transType={activePage} />;
    case "incomes":
      return <TransactionPage addTransaction = {addTransaction} closeActivePage = {toggleActivePage} transType={activePage} />;
    case "balance":
      return <BalancePage transactions = {[...costs, ...incomes]} closeActivePage = {toggleActivePage} />;
    default:
      return <MainPage openActivePage={toggleActivePage} />;
    };
}

export default App;
