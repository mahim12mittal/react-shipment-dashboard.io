import React from 'react'
import logo from '../Navbar/logo.svg'
import profile from '../Navbar/profile.svg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        padding: '5px'
    },
    icon: {
    },
    font: {
        fontFamily: 'Montserrat',
        // fontWeight: 600,
        fontSize: '15px',
        padding: '10px'
    },
    profile: {
        marginTop: '18px'
    },
    nav: {
        textDecoration: 'none',
        color: 'black',

    }
});

export default function Navbar() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={1}>
                <img className={classes.root} src={logo} width="60px" height="60px"></img>
            </Grid>
            <Grid item xs={2}>
                <p className={classes.font}>INTERNAL | <strong>Intugine</strong></p>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid style={{ marginTop: '22px' }} item xs={1}>
                <Link className={classes.nav} to='/'>
                    Home
            </Link>
            </Grid>
            <Grid style={{ marginTop: '22px' }} item xs={1}>
                <Link className={classes.nav} to='/mom'>
                    MOM</Link>
            </Grid>
            <Grid style={{ marginTop: '22px' }} item xs={1}>
                <Link className={classes.nav} to='/finance'>
                    Finance</Link>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
                <img className={classes.profile} src={profile} width="30px" height="30px"></img>
            </Grid>
        </Grid >
    )
}
