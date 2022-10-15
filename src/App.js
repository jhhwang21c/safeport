import { useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Main from './pages/Main';
import Register from './pages/Register';


function App() {

  const [accounts, setAccounts] = useState([]);


  return (
    <div className='App'>
      <Nav accounts={accounts} setAccounts={setAccounts}/>

      <Routes>
        <Route path='/'
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