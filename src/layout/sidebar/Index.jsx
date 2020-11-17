import React from 'react'
import './Style.css' 
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className='container_title'>
               <div className='avatar'>
                   <Avatar>F</Avatar>
               </div>
               <div className='content_title'>
                   <div className='title_text'>
                        <div>Felipe Miguel <span className='text'>R$ 0,00</span></div>
                        <div className='text'>GRUPO SAGA - Central de Serviços TI</div>
                   </div>
                   <div className='moreHorizIcon'>
                       <MoreHorizIcon/>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Sidebar