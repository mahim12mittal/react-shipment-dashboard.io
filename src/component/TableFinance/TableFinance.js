import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

export default function TableMo() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Comapany Name</TableCell>
                        <TableCell align="center">Owner Name</TableCell>
                        <TableCell align="center">Invoice Month</TableCell>
                        <TableCell align="center">Rate</TableCell>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Invoice Amount</TableCell>
                        <TableCell align="center">Invoice Raise Data</TableCell>
                        <TableCell align="center">Invoice Due Data</TableCell>
                        <TableCell align="center">Payment Expected Amount</TableCell>
                        <TableCell align="center">Payment Expected Date</TableCell>
                        <TableCell align="center">Payment Recieved Amount</TableCell>
                        <TableCell align="center">Payment Recieved Date</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="center">{row.ownerName}</TableCell>
                            <TableCell align="center">{row.invoiceMonth}</TableCell>
                            <TableCell align="center">{row.rate}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center">{row.invoiceAmount}</TableCell>
                            <TableCell align="center">{row.invoiceRaiseData}</TableCell>
                            <TableCell align="center">{row.invoiceDueDta}</TableCell>
                            <TableCell align="center">{row.paymentExpectedAmount}</TableCell>
                            <TableCell align="center">{row.paymentExpectedDate}</TableCell>
                            <TableCell align="center">{row.paymentRecievedAmount}</TableCell>
                            <TableCell align="center">{row.paymentRecievedDate}</TableCell>
                            <TableCell align="center">{row.Status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}