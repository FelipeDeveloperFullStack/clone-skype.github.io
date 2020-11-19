import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import IconButton from '@material-ui/core/IconButton'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';


const useStyle = makeStyles({
    container: {
        width: '100%'
    },
    header: {
        height: '88px',
        borderBottom: '1px solid #DADADC',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '24px'
    },
    bottonsHeader: {

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
    }
})

export default function Chat() {

    const classes = useStyle()

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div>
                    <div className={classes.name}>Marcos Guimarães</div>
                    <div style={{display: 'flex', fontSize: '11px'}}>
                        <div style={{display: 'flex', paddingRight: '10px'}}>
                            <FiberManualRecordOutlinedIcon className={classes.fiberManualRecordOutlinedIcon}/>
                            <div style={{paddingTop: '2px'}}>Ativo agora</div>
                        </div>
                        <div style={{paddingTop: '2px'}}>|</div>
                        <div style={{display: 'flex', paddingLeft: '10px', paddingRight: '10px'}}>
                            <CollectionsBookmarkOutlinedIcon className={classes.collectionsBookmarkOutlinedIcon}/>
                            <div style={{paddingTop: '2px'}}>Galeria</div>
                        </div>
                        <div style={{paddingTop: '2px'}}>|</div>
                        <div style={{display: 'flex', paddingLeft: '10px', paddingRight: '10px'}}>
                            <SearchOutlinedIcon className={classes.searchOutlinedIcon}/>
                            <div style={{paddingTop: '2px'}}>Localizar</div>
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
        </div>
    )
}