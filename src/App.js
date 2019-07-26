import React from 'react';
import Header from './components/Header/Header';
import routes from './routes';

function App() {
  return (
    <div >
      <Header />
      {routes}
    </div>
  );
}

export default App;
