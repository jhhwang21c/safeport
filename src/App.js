import { useState } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Nav from './Nav';
import Main from './pages/Main';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Request from './pages/Request';
import CreateRequest from './pages/CreateRequest';


function App() {

  const [accounts, setAccounts] = useState([]);
  const [member, signIn] = useState(false);
  const [profileImg, setImg] = useState('');
  const [nickname, setNickname] = useState('');


  return (
    <div className='App'>
      <Nav accounts={accounts} setAccounts={setAccounts}
        nickname={nickname} setNickname={setNickname}
        member={member} signIn={signIn}
        profileImg={profileImg} setImg={setImg} />

      <Routes>
        <Route path='/pages/CreateRequest'
          element={
            <CreateRequest
              accounts={accounts} setAccounts={setAccounts}
              member={member} signIn={signIn}
              profileImg={profileImg} setImg={setImg}
              nickname={nickname}
            />}
        />
        <Route path='/pages/Request'
          element={
            <Request
              accounts={accounts} setAccounts={setAccounts}
              member={member} signIn={signIn}
              profileImg={profileImg} setImg={setImg}
              nickname={nickname}
            />}
        />
        <Route path='/pages/Profile'
          element={
            <Profile
              accounts={accounts} setAccounts={setAccounts}
              member={member} signIn={signIn}
              profileImg={profileImg} setImg={setImg}
            />}
        />
        <Route path='/pages/Chat'
          element={
            <Chat
              accounts={accounts} setAccounts={setAccounts}
              member={member} signIn={signIn}
              profileImg={profileImg} setImg={setImg}
              nickname={nickname}
            />}
        />
        <Route path='/'
          element={
            <Main
              accounts={accounts} setAccounts={setAccounts}
              member={member} signIn={signIn}
              nickname={nickname}
            />}
        />

      </Routes>
    </div>

  );
}

export default App;