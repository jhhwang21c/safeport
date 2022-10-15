import { useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Main from './pages/Main';
import Marketplace from './pages/Marketplace';
import Register from './pages/Register';
import Claim from './pages/Claim';


function App() {

  const [accounts, setAccounts] = useState([]);


  return (
    <div className='App'>
      <Nav accounts={accounts} setAccounts={setAccounts}/>
      

      <Routes>
      <Route path='/pages/Marketplace'
          element={
            <Marketplace
              accounts={accounts} setAccounts={setAccounts}
            />}
        />
        <Route path='/pages/Claim'
          element={
            <Claim
              accounts={accounts} setAccounts={setAccounts}
            />}
        />
      <Route path='/pages/Register'
          element={
            <Register
              accounts={accounts} setAccounts={setAccounts}
            />}
        />

        <Route path='/pages/Main'
          element={
            <Main
              accounts={accounts} setAccounts={setAccounts}
            />}
        />

      </Routes>
    </div>

  );
}

export default App;