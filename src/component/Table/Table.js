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

function createData(name, ownerName, gst, invoice, PaymentRecievedDate, BillingStartDate, MinimumBilling, BillingRemark, Actions) {
    return { name, ownerName, gst, invoice, PaymentRecievedDate, BillingStartDate, MinimumBilling, BillingRemark, Actions };
}
//sample data 
const rows = [
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
    createData('Ashoka Logistics', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '30,000', '30 per device', 'Mahesh'),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Comapany Name</TableCell>
                        <TableCell align="center">Owner Name</TableCell>
                        <TableCell align="center">GST No.</TableCell>
                        <TableCell align="center">Invoice Month</TableCell>
                        <TableCell align="center">Payment Received Date</TableCell>
                        <TableCell align="center">Billing Start Date</TableCell>
                        <TableCell align="center">Minimum Billing</TableCell>
                        <TableCell align="center">Billing Remark</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="center">{row.ownerName}</TableCell>
                            <TableCell align="center">{row.gst}</TableCell>
                            <TableCell align="center">{row.invoice}</TableCell>
                            <TableCell align="center">{row.PaymentRecievedDate}</TableCell>
                            <TableCell align="center">{row.BillingStartDate}</TableCell>
                            <TableCell align="center">{row.MinimumBilling}</TableCell>
                            <TableCell align="center">{row.BillingRemark}</TableCell>
                            <TableCell align="center">{row.Actions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}