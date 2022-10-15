import { useState } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Main from "./pages/Main";
import Marketplace from "./pages/marketplace";
import Register from "./pages/register";
import Claim from "./pages/Claim";
import WineMarketplace from "./pages/wine_marketplace";
import Item from "./pages/Item";

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <div className="App">
      <Nav accounts={accounts} setAccounts={setAccounts} />

      <Routes>
      <Route
          path="/pages/Item"
          element={
            <Item accounts={accounts} setAccounts={setAccounts} />
          }
        />

        <Route
          path="/pages/WineMarketplace"
          element={
            <WineMarketplace accounts={accounts} setAccounts={setAccounts} />
          }
        />
        <Route
          path="/pages/Marketplace"
          element={
            <Marketplace accounts={accounts} setAccounts={setAccounts} />
          }
        />
        <Route
          path="/pages/Claim"
          element={<Claim accounts={accounts} setAccounts={setAccounts} />}
        />
        <Route
          path="/pages/Register"
          element={<Register accounts={accounts} setAccounts={setAccounts} />}
        />

        <Route
          path="/pages/Main"
          element={<Main accounts={accounts} setAccounts={setAccounts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
