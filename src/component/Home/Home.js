import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        backgroundColor: '#43425D',
        padding: '10px',
        fontFamily: 'Montserrat',
        color: "white",
        fontSize: "15px"
    },
    nav: {
        color: 'white',
        textDecoration: 'none'
    },
    filters: {
        padding: '20px'
    }
});

export default function Home() {
    const classes = useStyles();
    if (window.location.pathname === '/') {
        return (
            <Grid className={classes.root} container>
                <Grid item xs={5}></Grid>
                <Grid item xs={4}> <input type="search" placeholder="Search" style={{ width: "400px", padding: '5px' }} /></Grid>
                <Grid item xs={2} style={{ marginTop: '5px' }}>Set Display Items</Grid>
                <Grid item xs={1} style={{ marginTop: '5px' }}>Download</Grid>
                <Grid item xs={1} className={classes.filters}>Filters</Grid>
                <Grid item xs={1} style={{ marginTop: '3px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">User</InputLabel>
                        <Select
                            style={{ height: '35px', marginTop: '10px' }}
                            native
                            label="User"
                            inputProps={{
                                name: 'User',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '3px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">Choose Type</InputLabel>
                        <Select
                            style={{ height: '35px', width: '160px', marginTop: '10px' }}
                            native
                            label="Choose Type"
                            inputProps={{
                                name: 'Choose Type',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '3px', marginLeft: '70px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">Choose Month</InputLabel>
                        <Select
                            style={{ height: '35px', width: '170px', marginTop: '10px' }}
                            native
                            label="Choose Month"
                            inputProps={{
                                name: 'Choose Month',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }
    else if (window.location.pathname === '/mom') {
        return (
            <Grid className={classes.root} container>
                <Grid item xs={5}></Grid>
                <Grid item xs={4}> <input type="search" placeholder="Search" style={{ width: "400px", padding: '5px' }} /></Grid>
                <Grid item xs={2} style={{ marginTop: '5px' }}>Without GST</Grid>
                <Grid item xs={1} style={{ marginTop: '5px' }}>Download</Grid>

            </Grid>
        )
    }
    else if (window.location.pathname === '/finance') {
        return (
            <Grid className={classes.root} container>
                <Grid item xs={5}></Grid>
                <Grid item xs={4}> <input type="search" placeholder="Search" style={{ width: "400px", padding: '5px' }} /></Grid>
                <Grid item xs={2} style={{ marginTop: '5px' }}>Set Display Items</Grid>
                <Grid item xs={1} style={{ marginTop: '5px' }}>Download</Grid>
                <Grid item xs={1} className={classes.filters}>Filters</Grid>
                <Grid item xs={1} style={{ marginTop: '3px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">User</InputLabel>
                        <Select
                            style={{ height: '35px', marginTop: '10px' }}
                            native
                            label="User"
                            inputProps={{
                                name: 'User',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '3px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">Billing Start Date</InputLabel>
                        <Select
                            style={{ height: '35px', width: '160px', marginTop: '10px' }}
                            native
                            label="Billing Start Date"
                            inputProps={{
                                name: 'Billing Start Date',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '3px', marginLeft: '70px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">Choose Month</InputLabel>
                        <Select
                            style={{ height: '35px', width: '170px', marginTop: '10px' }}
                            native
                            label="Choose Month"
                            inputProps={{
                                name: 'Choose Month',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '3px', marginLeft: '80px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">Category</InputLabel>
                        <Select
                            style={{ height: '35px', width: '120px', marginTop: '10px' }}

                            label="Category"
                            inputProps={{
                                name: 'Category',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '3px', marginLeft: '25px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} htmlFor="outlined-age-native-simple">Status</InputLabel>
                        <Select
                            style={{ height: '35px', width: '100px', marginTop: '10px' }}
                            native
                            label="Status"
                            inputProps={{
                                name: 'Status',
                                id: 'outlined-age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        )
    }
}
