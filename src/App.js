import React from 'react'
import '../src/Style.css'
import SideBar from './layout/sidebar/Index'
import Chat from './layout/chat/Index'
import Footer from './layout/footer/Index'

function App() {
  return (
    <div className='container'>
       <SideBar/>
       <Chat/>
       <Footer/>
    </div>
  );
}

export default App;
