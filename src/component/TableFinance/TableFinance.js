import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, ownerName, invoiceMonth, rate, category, invoiceAmount, invoiceRaiseData, invoiceDueDta, paymentExpectedAmount, paymentExpectedDate, paymentRecievedAmount, paymentRecievedDate, Status) {
    return { name, ownerName, invoiceMonth, rate, category, invoiceAmount, invoiceRaiseData, invoiceDueDta, paymentExpectedAmount, paymentExpectedDate, paymentRecievedAmount, paymentRecievedDate, Status };
}
//sample data 
const rows = [
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
    createData('Ashoka Logistics', 'Ayub Sait', 'June', '', 'Fixed', '1,60,000', '01-02-2020', '01-02-2020', '30,000', '01-02-2020', '30,000', '01-02-2020', 'Mailed'),
];

export default function TableMo(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.state.name ? <TableCell>Comapany Name</TableCell> : ''}
                        {props.state.ownerName ? <TableCell align="center">Owner Name</TableCell> : ''}
                        {props.state.invoiceMonth ? <TableCell align="center">Invoice Month</TableCell> : ''}
                        {props.state.rate ? <TableCell align="center">Rate</TableCell> : ''}
                        {props.state.category ? <TableCell align="center">Category</TableCell> : ''}
                        {props.state.invoiceAmount ? <TableCell align="center">Invoice Amount</TableCell> : ''}
                        {props.state.invoiceRaiseData ? <TableCell align="center">Invoice Raise Data</TableCell> : ''}
                        {props.state.invoiceDueData ? <TableCell align="center">Invoice Due Data</TableCell> : ''}
                        {props.state.paymentExpectedAmount ? <TableCell align="center">Payment Expected Amount</TableCell> : ''}
                        {props.state.paymentExpectedDate ? <TableCell align="center">Payment Expected Date</TableCell> : ''}
                        {props.state.paymentRecievedAmount ? <TableCell align="center">Payment Recieved Amount</TableCell> : ''}
                        {props.state.paymentRecievedDate ? <TableCell align="center">Payment Recieved Date</TableCell> : ''}
                        {props.state.status ? <TableCell align="center">Status</TableCell> : ''}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            {props.state.name ? <TableCell component="th" scope="row">{row.name}</TableCell> : ''}
                            {props.state.ownerName ? <TableCell align="center">{row.ownerName}</TableCell> : ''}
                            {props.state.invoiceMonth ? <TableCell align="center">{row.invoiceMonth}</TableCell> : ''}
                            {props.state.rate ? <TableCell align="center">{row.rate}</TableCell> : ''}
                            {props.state.category ? <TableCell align="center">{row.category}</TableCell> : ''}
                            {props.state.invoiceAmount ? <TableCell align="center">{row.invoiceAmount}</TableCell> : ''}
                            {props.state.invoiceRaiseData ? <TableCell align="center">{row.invoiceRaiseData}</TableCell> : ''}
                            {props.state.invoiceDueData ? <TableCell align="center">{row.invoiceDueDta}</TableCell> : ''}
                            {props.state.paymentExpectedAmount ? <TableCell align="center">{row.paymentExpectedAmount}<EditIcon style={{ marginLeft: '10px' }} fontSize='small' /></TableCell> : ''}
                            {props.state.paymentExpectedDate ? <TableCell align="center">{row.paymentExpectedDate}<EditIcon style={{ marginLeft: '2px' }} fontSize='small' /></TableCell> : ''}
                            {props.state.paymentRecievedAmount ? <TableCell align="center">{row.paymentRecievedAmount}</TableCell> : ''}
                            {props.state.paymentRecievedDate ? <TableCell align="center">{row.paymentRecievedDate}</TableCell> : ''}
                            {props.state.status ? <TableCell align="center"><FormControl >
                                <NativeSelect
                                    value={state.age}
                                    onChange={handleChange}
                                    name="age"
                                    inputProps={{ 'aria-label': 'age' }}
                                >
                                    <option value="">None</option>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </NativeSelect>
                            </FormControl></TableCell> : ''}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}