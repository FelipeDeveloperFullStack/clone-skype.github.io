import React from 'react'
import '../src/Style.css'
import SideBar from './layout/sidebar/Index'
import Chat from './layout/chat/Index'

function App() {
  return (
    <div className='container'>
       <SideBar/>
       <Chat/>
    </div>
  );
}

export default App;
