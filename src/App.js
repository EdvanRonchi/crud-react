import { ToastContainer } from 'react-toastify'
import Routes from "./routes";
import React from 'react';

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer 
        position="top-center"
      />
    </div>
  );
}

export default App;
