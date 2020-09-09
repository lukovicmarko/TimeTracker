import React from 'react';


import Login from './pages/Login';
import NavBar from './layout/NavBar';
import Dashboard from './layout/Dashboard';
import Sidebar from './layout/Sidebar';

function App() {
  return (
    <div className="app">
      <Dashboard />
      <Sidebar />
    </div>
  );
}

export default App;
