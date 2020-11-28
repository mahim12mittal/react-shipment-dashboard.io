import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Table from '../Table/Table';
import TableFinance from '../TableFinance/TableFinance'
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
    const [first, setFirst] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [state, setState] = React.useState({
        dealID: true,
        dealName: true,
        companyName: true,
        status: true,
        ownerName: true,
        accountManager: true,
        implementationOwner: true,
        invoice: true,
        billingRelatedRemark: true,
        contractedAmount: true,
        invoiceAmount: true,
        invoiceRaiseDate: true,
        invoiceDueDate: true,
        billingStartDate: true,
        overdueDays: true,
        paymentExpectedAmount: true,
        paymentExpectedDate: true,
        paymentReceivedAmount: true,
        paymentReceivedDate: true,
        pendingAmount: true,
    });
    const [stateFinance, setStateFinance] = React.useState({
        name: true,
        ownerName: true,
        invoiceMonth: true,
        rate: true,
        category: true,
        invoiceAmount: true,
        invoiceRaiseData: true,
        invoiceDueData: true,
        paymentExpectedAmount: true,
        paymentExpectedDate: true,
        paymentRecievedAmount: true,
        paymentRecievedDate: true,
        status: true,
    });

    const handleClickFirst = () => {
        setFirst(true);
    };
    const handleCloseFirst = () => {
        setFirst(false);
    };
    const handleClickSecond = () => {
        setSecond(true);
    };
    const handleCloseSecond = () => {
        setSecond(false);
    };
    const abc = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked })
    }
    const xyz = (event) => {
        setStateFinance({ ...stateFinance, [event.target.name]: event.target.checked })
    }


    if (window.location.pathname === '/') {
        return (
            <Grid className={classes.root} container>
                <Grid item xs={5}></Grid>
                <Grid item xs={4}> <input type="search" placeholder="Search" style={{ width: "400px", padding: '5px' }} /></Grid>
                <Grid item xs={2} style={{ marginTop: '' }}>
                    <Button style={{ color: 'white', fontFamily: 'Montserrat' }} onClick={handleClickFirst}>
                        Set Display Items
                </Button>
                    <Dialog
                        open={first}
                        onClose={handleCloseFirst}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">Set Display Items</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.dealID}
                                        onChange={abc}
                                        name="dealID"
                                        color='primary'
                                    />}
                                    label="Deal id"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.dealName}
                                        onChange={abc}
                                        name="dealName"
                                        color='primary'
                                    />}
                                    label="Deal Name"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.companyName}
                                        onChange={abc}
                                        name="companyName"
                                        color='primary'
                                    />}
                                    label="Company Name"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.status}
                                        onChange={abc}
                                        name="status"
                                        color='primary'
                                    />}
                                    label="status"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.ownerName}
                                        onChange={abc}
                                        name="ownerName"
                                        color='primary'
                                    />}
                                    label="Owner Name"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.accountManager}
                                        onChange={abc}
                                        name="accountManager"
                                        color='primary'
                                    />}
                                    label="Account Manager"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.implementationOwner}
                                        onChange={abc}
                                        name="implementationOwner"
                                        color='primary'
                                    />}
                                    label="Implementation Owner"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.invoice}
                                        onChange={abc}
                                        name="invoice"
                                        color='primary'
                                    />}
                                    label="Invoice"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.billingRelatedRemark}
                                        onChange={abc}
                                        name="billingRelatedRemark"
                                        color='primary'
                                    />}
                                    label="Billing Related Remark"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.contractedAmount}
                                        onChange={abc}
                                        name="contractedAmount"
                                        color='primary'
                                    />}
                                    label="Contracted Amount"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.invoiceAmount}
                                        onChange={abc}
                                        name="invoiceAmount"
                                        color='primary'
                                    />}
                                    label="Invoice Amount"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.invoiceRaiseDate}
                                        onChange={abc}
                                        name="invoiceRaiseDate"
                                        color='primary'
                                    />}
                                    label="Invoice Raise Date"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.invoiceDueDate}
                                        onChange={abc}
                                        name="invoiceDueDate"
                                        color='primary'
                                    />}
                                    label="Invoice Due Date"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.overdueDays}
                                        onChange={abc}
                                        name="overdueDays"
                                        color='primary'
                                    />}
                                    label="Overdue Days"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.paymentExpectedAmount}
                                        onChange={abc}
                                        name="paymentExpectedAmount"
                                        color='primary'
                                    />}
                                    label="Payment Expected Amount"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.paymentExpectedDate}
                                        onChange={abc}
                                        name="paymentExpectedDate"
                                        color='primary'
                                    />}
                                    label="Payment Expected Date"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.paymentReceivedAmount}
                                        onChange={abc}
                                        name="paymentReceivedAmount"
                                        color='primary'
                                    />}
                                    label="Payment Received Amount"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.paymentReceivedDate}
                                        onChange={abc}
                                        name="paymentReceivedDate"
                                        color='primary'
                                    />}
                                    label="Payment Received Date"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={state.pendingAmount}
                                        onChange={abc}
                                        name="pendingAmount"
                                        color='primary'
                                    />}
                                    label="Pending Amount"
                                ></FormControlLabel>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseFirst} color="primary" autoFocus>
                                Apply
                  </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '5px' }}>Download</Grid>
                <Grid item xs={1} className={classes.filters}>Filters</Grid>
                <Grid item xs={1} style={{ marginTop: '3px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} >User</InputLabel>
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
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }}>Choose Type</InputLabel>
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
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }}>Choose Month</InputLabel>
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
                <Table state={state} />
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
                <Grid item xs={2} style={{ marginTop: '' }}>
                    <Button style={{ color: 'white', fontFamily: 'Montserrat' }} onClick={handleClickSecond}>
                        Set Display Items
                </Button>
                    <Dialog
                        open={second}
                        onClose={handleCloseSecond}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">Set Display Items</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.name}
                                        onChange={xyz}
                                        name="name"
                                        color='primary'
                                    />}
                                    label="Company Name"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.ownerName}
                                        onChange={xyz}
                                        name="ownerName"
                                        color='primary'
                                    />}
                                    label="Owner Name"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.invoiceMonth}
                                        onChange={xyz}
                                        name="invoiceMonth"
                                        color='primary'
                                    />}
                                    label="Invoice Month"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.rate}
                                        onChange={xyz}
                                        name="rate"
                                        color='primary'
                                    />}
                                    label="Rate"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.category}
                                        onChange={xyz}
                                        name="category"
                                        color='primary'
                                    />}
                                    label="Category"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.invoiceAmount}
                                        onChange={xyz}
                                        name="invoiceAmount"
                                        color='primary'
                                    />}
                                    label="Invoice Amount"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.invoiceRaiseData}
                                        onChange={xyz}
                                        name="invoiceRaiseData"
                                        color='primary'
                                    />}
                                    label="Invoice Raise Data"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.invoiceDueData}
                                        onChange={xyz}
                                        name="invoiceDueData"
                                        color='primary'
                                    />}
                                    label="Invoice Due Data"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.paymentExpectedAmount}
                                        onChange={xyz}
                                        name="paymentExpectedAmount"
                                        color='primary'
                                    />}
                                    label="Payment Expected Amount"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.paymentExpectedDate}
                                        onChange={xyz}
                                        name="paymentExpectedDate"
                                        color='primary'
                                    />}
                                    label="Payment Expected Date"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.paymentRecievedAmount}
                                        onChange={xyz}
                                        name="paymentRecievedAmount"
                                        color='primary'
                                    />}
                                    label="Payment Recieved Amount"
                                ></FormControlLabel>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.paymentRecievedDate}
                                        onChange={xyz}
                                        name="paymentRecievedDate"
                                        color='primary'
                                    />}
                                    label="Payment Recieved Date"
                                ></FormControlLabel>
                                <br></br>
                                <FormControlLabel
                                    control={<Checkbox
                                        checked={stateFinance.status}
                                        onChange={xyz}
                                        name="status"
                                        color='primary'
                                    />}
                                    label="Status"
                                ></FormControlLabel>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </Grid>
                <Grid item xs={1} style={{ marginTop: '5px' }}>Download</Grid>
                <Grid item xs={1} className={classes.filters}>Filters</Grid>
                <Grid item xs={1} style={{ marginTop: '3px' }}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }}>User</InputLabel>
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
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} >Billing Start Date</InputLabel>
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
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} >Choose Month</InputLabel>
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
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} >Category</InputLabel>
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
                        <InputLabel style={{ color: 'white', fontFamily: 'Montserrat' }} >Status</InputLabel>
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
                <TableFinance state={stateFinance} />
            </Grid>
        )
    }
}
