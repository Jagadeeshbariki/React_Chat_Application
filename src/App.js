import React from 'react';
import Chat from './Chat_com/Chat';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Chat_com/Header/Header';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className='App row '>
      <Header/>   {/* Header Section */}
      <div className='col-3'></div>
      <div className='col-7'>
        <Chat/>
      </div>
      <div className='col-2'>

      </div>
      <Footer/>
    </div>
  );
}

export default App;

