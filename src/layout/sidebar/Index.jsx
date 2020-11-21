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
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

const Sidebar = () => {

    const contacts = [
        {
            title: 'SQUAD | N2 DS',
            subtitle: 'Backlog N2 em 39 chamados',
            date: '14:47'
        },
        {
            title: 'Projeto Caixa Baixa TI',
            subtitle: 'Backlog N2 em 39 chamados',
            date: '13:55'
        },
        {
            title: 'TI - Suporte',
            subtitle: 'Backlog N2 em 39 chamados',
            date: '17:18'
        },
        {
            title: 'SQUAD | N1',
            subtitle: 'Backlog N2 em 39 chamados',
            date: '09:12'
        },
        {
            title: 'Daniel',
            subtitle: 'Citroen',
            date: '12:29',
            chip_number: 2
        },
        {
            title: 'Renato',
            subtitle: 'Chamado#0331332',
            date: '11:48',
            chip_number: 1
        },
        {
            title: 'João Antonio',
            subtitle: 'Blz',
            date: '13:33'
        },
        {
            title: 'Marcos Guimarães',
            subtitle: 'Chamado#0332211 - ELSA',
            date: '11:43',
            chip_number: 4
        }
    ]

    return (
        <div className='sidebar'>
            <div className='container_title'>
                <div className='avatar'>
                    <Avatar>F</Avatar>
                </div>
                <div className='content_title'>
                    <div className='title_text'>
                        <div>Felipe Miguel <span className='text'>R$ 0,00</span></div>
                        <div className='text'>Central de Serviços TI</div>
                    </div>
                    <div className='moreHorizIcon'>
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>

            <div className='container_input'>
                <SearchIcon className='searchIcon' htmlFor='input' />
                <input className='input' type="text" id='input' placeholder='People, groups e messages' />
                <div />
                <DialpadIcon className='dialpadIcon' />
            </div>

            <div className='container_options'>
                <div>
                    <InsertCommentIcon />
                    <div>Chats</div>
                </div>
                <div>
                    <CallOutlinedIcon />
                    <div>Calls</div>
                </div>
                <div>
                    <ContactPhoneOutlinedIcon />
                    <div>Contacts</div>
                </div>
                <div>
                    <NotificationsOutlinedIcon />
                    <div>Notifications</div>
                </div>
            </div>

            <div className='divider' />

            <div className='options_chat'>
                <div className='botton_chat'>
                    <VideocamOutlinedIcon />
                    <div>Reunião</div>
                    <ExpandMoreOutlinedIcon />
                </div>
                <div className='botton_chat'>
                    <EditOutlinedIcon />
                    <div>Novo Chat</div>
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>

            <div className='text_chats_recents'>
                <div>CHATS RECENTES</div>
                <ExpandMoreOutlinedIcon />
            </div>

            <div className='text_favoritos'>
                FAVORITOS
            </div>


            <div className='scroll_contacts'>
                {contacts.map((contact, key) => {
                    return (
                        <div className='container_contacts'>
                            <div key={key}>
                                <div>
                                    <Avatar style={{display: 'flex', justifyContent: 'center'}}/>
                                    <div>
                                        <div><b>{contact.title}</b></div>
                                        <div>{contact.subtitle}</div>
                                    </div>
                                </div>
                                <div>
                                    <div>{contact.date}</div>
                                    {contact.chip_number ? <div className='chip'>{contact.chip_number}</div> : <NotificationsOffIcon className='notificationOffIcon'/>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>


    )
}

export default Sidebar