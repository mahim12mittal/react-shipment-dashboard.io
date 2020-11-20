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

function createData(name, January, February, March, April, May, June, July, August, September, October, November, December, Total) {
    return { name, January, February, March, April, May, June, July, August, September, October, November, December, Total };
}
//sample data 
const rows = [
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
    createData('Ashoka Logistics', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000', '30,000'),
];

export default function TableMom() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Comapany Name</TableCell>
                        <TableCell align="center">January</TableCell>
                        <TableCell align="center">February</TableCell>
                        <TableCell align="center">March</TableCell>
                        <TableCell align="center">April</TableCell>
                        <TableCell align="center">May</TableCell>
                        <TableCell align="center">June</TableCell>
                        <TableCell align="center">July</TableCell>
                        <TableCell align="center">August</TableCell>
                        <TableCell align="center">September</TableCell>
                        <TableCell align="center">October</TableCell>
                        <TableCell align="center">November</TableCell>
                        <TableCell align="center">December</TableCell>
                        <TableCell align="center">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="center">{row.January}</TableCell>
                            <TableCell align="center">{row.February}</TableCell>
                            <TableCell align="center">{row.March}</TableCell>
                            <TableCell align="center">{row.April}</TableCell>
                            <TableCell align="center">{row.May}</TableCell>
                            <TableCell align="center">{row.June}</TableCell>
                            <TableCell align="center">{row.July}</TableCell>
                            <TableCell align="center">{row.August}</TableCell>
                            <TableCell align="center">{row.September}</TableCell>
                            <TableCell align="center">{row.October}</TableCell>
                            <TableCell align="center">{row.November}</TableCell>
                            <TableCell align="center">{row.December}</TableCell>
                            <TableCell align="center">{row.Total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}