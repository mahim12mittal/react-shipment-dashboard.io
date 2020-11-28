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

function createData(dealid, dealname, name, status, ownerName, accountManager, implementationOwner, invoice, billingRelatedRemark, contractedAmount, invoiceAmount, invoiceRaiseDate, invoiceDueDate, billingStartDate, overdueDays, paymentExpectedAmount, paymentExpectedDate, paymentReceivedAmount, paymentReceivedDate, pendingAmount) {
    return { dealid, dealname, name, status, ownerName, accountManager, implementationOwner, invoice, billingRelatedRemark, contractedAmount, invoiceAmount, invoiceRaiseDate, invoiceDueDate, billingStartDate, overdueDays, paymentExpectedAmount, paymentExpectedDate, paymentReceivedAmount, paymentReceivedDate, pendingAmount };
}
//sample data 
const rows = [
    createData('', '', 'Ashoka Logistics', '', 'Ayub Sait', 'GSTIN3456789', '1,60,000', '01-02-2020', '', '', '30,000', '30 per device', 'Mahesh'),
];

export default function BasicTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {props.state.dealID ? <TableCell>Deal id</TableCell> : ''}
                        {props.state.dealName ? <TableCell align="center">Deal Name</TableCell> : ''}
                        {props.state.companyName ? <TableCell align="center">Company Name</TableCell> : ''}
                        {props.state.status ? <TableCell align="center">Status</TableCell> : ''}
                        {props.state.ownerName ? <TableCell align="center">Owner Name</TableCell> : ''}
                        {props.state.accountManager ? <TableCell align="center">Account Manager</TableCell> : ''}
                        {props.state.implementationOwner ? <TableCell align="center">Implementation Owner</TableCell> : ''}
                        {props.state.invoice ? <TableCell align="center">Invoice Month</TableCell> : ''}
                        {props.state.billingRelatedRemark ? <TableCell align="center">Billing Related Remark</TableCell> : ''}
                        {props.state.contractedAmount ? <TableCell align="center">Contracted Amount</TableCell> : ''}
                        {props.state.invoiceAmount ? <TableCell align="center">Invoice Amount</TableCell> : ''}
                        {props.state.invoiceRaiseDate ? <TableCell align="center">Invoice Raise Date</TableCell> : ''}
                        {props.state.invoiceDueDate ? <TableCell align="center">Invoice Due Date</TableCell> : ''}
                        {props.state.overdueDays ? <TableCell align="center">Overdue Days</TableCell> : ''}
                        {props.state.paymentExpectedAmount ? <TableCell align="center">Payment Expected Amount</TableCell> : ''}
                        {props.state.paymentExpectedDate ? <TableCell align="center">Payment Expected Date</TableCell> : ''}
                        {props.state.paymentReceivedAmount ? <TableCell align="center">Payment Received Amount</TableCell> : ''}
                        {props.state.paymentReceivedDate ? <TableCell align="center">Payment Received Date</TableCell> : ''}
                        {props.state.pendingAmount ? <TableCell align="center">Pending Amount</TableCell> : ''}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            {props.state.dealID ? <TableCell component="th" scope="row">{row.dealid}</TableCell> : ''}
                            {props.state.dealName ? <TableCell align="center">{row.dealname}</TableCell> : ''}
                            {props.state.companyName ? <TableCell align="center">{row.name}</TableCell> : ''}
                            {props.state.status ? <TableCell align="center">{row.status}</TableCell> : ''}
                            {props.state.ownerName ? <TableCell align="center">{row.ownerName}</TableCell> : ''}
                            {props.state.accountManager ? <TableCell align="center">{row.accountManager}</TableCell> : ''}
                            {props.state.implementationOwner ? <TableCell align="center">{row.implementationOwner}</TableCell> : ''}
                            {props.state.invoice ? <TableCell align="center">{row.invoice}</TableCell> : ''}
                            {props.state.billingRelatedRemark ? <TableCell align="center">{row.billingRelatedRemark}</TableCell> : ''}
                            {props.state.contractedAmount ? <TableCell align="center">{row.contractedAmount}</TableCell> : ''}
                            {props.state.invoiceAmount ? <TableCell align="center">{row.invoiceAmount}</TableCell> : ''}
                            {props.state.invoiceRaiseDate ? <TableCell align="center">{row.invoiceRaiseDate}</TableCell> : ''}
                            {props.state.invoiceDueDate ? <TableCell align="center">{row.invoiceDueDate}</TableCell> : ''}
                            {props.state.overdueDays ? <TableCell align="center">{row.overdueDays}</TableCell> : ''}
                            {props.state.paymentExpectedAmount ? <TableCell align="center">{row.paymentExpectedAmount}</TableCell> : ''}
                            {props.state.paymentExpectedDate ? <TableCell align="center">{row.paymentExpectedDate}</TableCell> : ''}
                            {props.state.paymentReceivedAmount ? <TableCell align="center">{row.paymentReceivedAmount}</TableCell> : ''}
                            {props.state.paymentReceivedDate ? <TableCell align="center">{row.paymentReceivedDate}</TableCell> : ''}
                            {props.state.pendingAmount ? <TableCell align="center">{row.pendingAmount}</TableCell> : ''}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}