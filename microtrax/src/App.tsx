import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import TransactionHistory from './components/TransactionHistory';
import SendMoney from './components/SendMoney';
import ReceivedPayments from './components/ReceivedPayments';
import ReloadWallet from './components/ReloadWallet';
import WithdrawWallet from './components/WithdrawWallet';
import SearchUser from './components/SearchUser';
import UserProfile from './components/UserProfile';
import ShareWallet from './components/ShareWallet';
import Messages from './components/Messages';
import AccountTier from './components/AccountTier';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/received" element={<ReceivedPayments />} />
          <Route path="/reload" element={<ReloadWallet />} />
          <Route path="/withdraw" element={<WithdrawWallet />} />
          <Route path="/search" element={<SearchUser />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/share" element={<ShareWallet />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/account-tier" element={<AccountTier />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
