import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import IconButton from '@material-ui/core/IconButton'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import MicNoneIcon from '@material-ui/icons/MicNone';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MoodIcon from '@material-ui/icons/Mood';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';

const useStyle = makeStyles({
    container: {
        width: '100%'
    },
    header: {
        height: '88px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '24px',
        position: 'fixed'
    },
    moodIcon: {
        position: 'relative',
        top: '13px',
        left: '10px',
        color: 'gray'
    },
    inputContainer: {
        backgroundColor: '#F1F1F4',
        borderRadius: '20px',
        height: '50px',
        marginLeft: '80px',
        display: 'flex'
    },
    inputText: {
        border: 'none',
        outline: 0,
        width: '685px',
        backgroundColor: '#F1F1F4',
        paddingLeft: '20px'
    },
    dividerHeader: {
        borderBottom: '1px solid #DADADC',
        position: 'fixed',
        top: '90px',
        width: '100%'
    },
    positionFooter: {
        position: 'fixed',
        bottom: 0
    },
    footer: {
        height: '88px',
        borderBottom: '1px solid #DADADC',
        padding: '24px',
        display: 'flex',
        marginBottom: '23px'
    },
    bottonsHeader: {
        position: 'fixed',
        right: '30px'
    },
    bottonsFooter: {
        position: 'fixed',
        right: '30px'
    },
    name: {
        fontSize: '23px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    fiberManualRecordOutlinedIcon: {
        width: '12px',
        height: '12px',
        position: 'relative',
        top: '2px',
        color: 'green',
        backgroundColor: 'green',
        borderRadius: '50%',
        marginRight: '3px'
    },
    collectionsBookmarkOutlinedIcon: {
        width: '12px',
        height: '12px',
        position: 'relative',
        top: '2px',
        borderRadius: '50%',
        marginRight: '3px'
    },
    searchOutlinedIcon: {
        width: '12px',
        height: '12px',
        position: 'relative',
        top: '2px',
        borderRadius: '50%',
        marginRight: '3px'
    },
    conversation: {
        position: 'relative',
        top: '150px',
        left: '30px',
        marginTop: '130px'
    },
    question: {
        display: 'flex',
        marginLeft: '23px'
    },
    chatText: {
        fontSize: '14px',
        backgroundColor: '#F1F1F4',
        padding: '8px',
        borderRadius: '20px',
        marginBottom: '1px',
        maxWidth: 'max-content'
    },
    questionMessage: {
        marginLeft: '10px'
    },
    questionTextName: {
        fontSize: '11px',
        marginBottom: '3px',
        color: 'grey'
    },
    questionMoodIcon: {
        height: '15px',
        width: '15px',
        position: 'relative',
        left: '25px'
    },
    answer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '980px'
    },
    lineDate: {
        bottom: '85px',
        display: 'flex',
        position: 'relative',
        left: '25px',
        alignItems: 'center',
        color: 'grey'
    },
    lineLeft: {
        borderBottom: '1px solid #F1F1F4',
        width: '50%'
    },
    dateWeek: {
        width: '9%',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: '12px',
        color: 'grey'
    },
    lineRight: {
        borderBottom: '1px solid #F1F1F4',
        width: '50%'
    }
})

export default function Chat() {

    const classes = useStyle()

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <div className={classes.name}>Felipe Miguel</div>
                    <div style={{ display: 'flex', fontSize: '11px' }}>
                        <div style={{ display: 'flex', paddingRight: '10px' }}>
                            <FiberManualRecordOutlinedIcon className={classes.fiberManualRecordOutlinedIcon} />
                            <div style={{ paddingTop: '2px' }}>Ativo agora</div>
                        </div>
                        <div style={{ paddingTop: '2px' }}>|</div>
                        <div style={{ display: 'flex', paddingLeft: '10px', paddingRight: '10px' }}>
                            <CollectionsBookmarkOutlinedIcon className={classes.collectionsBookmarkOutlinedIcon} />
                            <div style={{ paddingTop: '2px' }}>Galeria</div>
                        </div>
                        <div style={{ paddingTop: '2px' }}>|</div>
                        <div style={{ display: 'flex', paddingLeft: '10px', paddingRight: '10px' }}>
                            <SearchOutlinedIcon className={classes.searchOutlinedIcon} />
                            <div style={{ paddingTop: '2px' }}>Localizar</div>
                        </div>
                    </div>
                </div>
                <div className={classes.bottonsHeader}>
                    <IconButton>
                        <VideocamOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <CallOutlinedIcon />
                    </IconButton>

                    <IconButton>
                        <GroupAddOutlinedIcon />
                    </IconButton>

                </div>
            </div>
            <div className={classes.dividerHeader}></div>

            <div className={classes.conversation}>
                <div className={classes.lineDate}>
                    <div className={classes.lineLeft}></div>
                    <div className={classes.dateWeek}>Sexta Feira</div>
                    <div className={classes.lineRight}></div>
                </div>
                <div className={classes.question}>
                    <Avatar />
                    <div className={classes.questionMessage}>
                        <div className={classes.questionTextName}>Felipe, 14:06</div>
                        <div className={classes.chatText}>
                            <div style={{ display: 'flex' }}>
                                <div>tarde</div>
                                <MoodIcon className={classes.questionMoodIcon} />
                            </div>
                        </div>
                        <div className={classes.chatText}>
                            <div style={{ display: 'flex' }}>
                                <div>Chamado#0331021 — RESET DE SENHA CATALOGO FIAT</div>
                                <MoodIcon className={classes.questionMoodIcon} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.answer}>
                    <div className={classes.chatText} style={{ backgroundColor: '#DBF4FD' }}>
                        <div>Boa tarde</div>
                    </div>
                    <div className={classes.chatText} style={{ backgroundColor: '#DBF4FD' }}>
                        <div>Beleza</div>
                    </div>
                    <div className={classes.chatText} style={{ backgroundColor: '#DBF4FD' }}>
                        <div>Obrigado!</div>
                    </div>
                </div>

                <div className={classes.question}>
                    <Avatar />
                    <div className={classes.questionMessage}>
                        <div className={classes.questionTextName}>Felipe, 14:06</div>
                        <div className={classes.chatText}>
                            <div style={{ display: 'flex' }}>
                                <div>Vlw</div>
                                <MoodIcon className={classes.questionMoodIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.positionFooter}>
                <div className={classes.footer}>
                    <div className={classes.inputContainer}>
                        <MoodIcon className={classes.moodIcon} />
                        <input placeholder='Digite aqui' className={classes.inputText}></input>
                    </div>
                    <div className={classes.bottonsFooter}>
                        <IconButton >
                            <InsertDriveFileIcon />
                        </IconButton>

                        <IconButton>
                            <RecentActorsIcon />
                        </IconButton>

                        <IconButton>
                            <MicNoneIcon />
                        </IconButton>

                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>

                    </div>
                </div>
            </div>


        </div>
    )
}