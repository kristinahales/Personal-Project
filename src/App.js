import React from 'react';
import Header from './components/Header/Header';
import routes from './routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Header />
      {routes}
      <ToastContainer />
    </div>
  );
}

export default App;
