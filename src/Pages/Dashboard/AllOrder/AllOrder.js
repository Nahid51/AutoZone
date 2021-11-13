import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, CircularProgress, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const AllOrder = () => {
    const { user, isLoading, error } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    const [deleteItem, setDeleteItem] = useState(false);

    useEffect(() => {
        fetch(`https://aqueous-garden-63988.herokuapp.com/allorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [user.email, deleteItem]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this file?')
        if (proceed) {
            fetch(`https://aqueous-garden-63988.herokuapp.com/allorders/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => setDeleteItem(data))
        }
    }

    return (
        <div>
            {deleteItem && <Alert severity="success">Delete Successfully!</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <Typography sx={{ fontSize: 32 }}>All Orders: {allOrders.length}</Typography>
            <TableContainer component={Paper}>
                {!isLoading &&
                    <Table aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Customer Name</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Contact Number</StyledTableCell>
                                <StyledTableCell align="right">Address</StyledTableCell>
                                <StyledTableCell align="right">Product Name</StyledTableCell>
                                <StyledTableCell align="right">Product Price(&#36;)</StyledTableCell>
                                <StyledTableCell align="right">Purchase Date</StyledTableCell>
                                <StyledTableCell align="right">Purchase Now</StyledTableCell>
                                <StyledTableCell align="right">Delete Item</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allOrders.map((allorder) => (
                                <StyledTableRow key={allorder._id} >
                                    <StyledTableCell component="th" scope="row">
                                        {allorder.customerName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{allorder.email}</StyledTableCell>
                                    <StyledTableCell align="right">{allorder.contact}</StyledTableCell>
                                    <StyledTableCell align="right">{allorder.address}</StyledTableCell>
                                    <StyledTableCell align="right">{allorder.productName}</StyledTableCell>
                                    <StyledTableCell align="right">&#36;{allorder.productPrice}</StyledTableCell>
                                    <StyledTableCell align="right">{allorder.today}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <NavLink to="/extra" style={{ textDecoration: "none" }}>
                                            <Button>Purchase</Button>
                                        </NavLink>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button onClick={() => handleDelete(allorder._id)}>Delete</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>}
                {isLoading && <CircularProgress color="secondary" />}
            </TableContainer>
        </div>
    );
};

export default AllOrder;