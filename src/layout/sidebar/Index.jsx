import React from 'react'
import './Style.css' 
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import DialpadIcon from '@material-ui/icons/Dialpad';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

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

           <div className='container_input'>
               <SearchIcon className='searchIcon' for='input'/>
               <input className='input' type="text" id='input' placeholder='People, groups e messages'/>
               <DialpadIcon/>
           </div>

           <div className='container_options'>
                <div>
                    <InsertCommentIcon/>
                    <div>Chats</div>
                </div>
                <div>
                    <CallOutlinedIcon/>
                    <div>Calls</div>
                </div>
                <div>
                    <ContactPhoneOutlinedIcon/>
                    <div>Contacts</div>
                </div>
                <div>
                    <NotificationsOutlinedIcon/>
                    <div>Notifications</div>
                </div>
           </div>

           <div className='divider'/>

           <div className='options_chat'>
                <div>
                    <div>RECENT CHATS</div>
                    <ExpandMoreOutlinedIcon className='expandMoreOutlinedIcon'/>
                </div>
                <div className='botton_chat'>
                    <AddOutlinedIcon/>
                    <div>Chat</div>
                </div>
           </div>

        </div>
    )
}

export default Sidebar