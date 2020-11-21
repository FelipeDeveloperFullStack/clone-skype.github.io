import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
    root: {
        backgroundColor: '#2B2C33',
        height: '32px',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        color:'#FFF',
        fontSize: '11px',
        padding: '10px'
    },
    spacing: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

export default function Footer() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <div className={classes.spacing}>
                <div>Baixar Aplicativo da Área de Trabalho  *  Comentários  *  Idioma (pt-BR)  *  Usar o Skype para Web com segurança em um computador público  *  Sair</div>
                <div>Termos de uso  *  Política de privacidade e de cookies</div>
            </div>
        </div>
    )
}