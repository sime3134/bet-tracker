'use client';

import Typography from '@mui/material';
import BetTableToolbar from '@/components/BetTableToolbar';
import Paper from '@mui/material/Paper';
import filter, { filterStatus, filterStartDate, filterEndDate, filterOdds, filterSum, filterTitle, filterResult } from '@/utilities/filters';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

 
 const BetTable = ( { originalBets } ) => {
    const [bets, setBets] = useState(originalBets);
    const [searchField, setSearchField] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }


    useEffect(() => {
        
        const url = `http://localhost:3000/api/v1/bets?query=${searchField}&status=${selectedStatus}&page=${page}&limit=${rowsPerPage}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setBets(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [searchField, selectedStatus, page, rowsPerPage]);

    function createData(title, date, sum, odds, result, status ) {
        return {
            title, date, sum, odds, result, status
        }; 
    }

    const data = bets.map ((bet) => {
        return createData(bet.title, bet.date, bet.sum, bet.odds, bet.result, bet.status);
    });

    const headCells = [
        {
            id: 'title',
            numeric: false,
            disablePadding: true,
            label: 'Title',
        },
        {
            id: 'date',
            numeric: true,
            disablePadding: true,
            label: 'Date',
        },
        {
            id: 'sum',
            numeric: true,
            disablePadding: true,
            label: 'Sum',
        },
        {
            id: 'odds',
            numeric: true,
            disablePadding: true,
            label: 'Odds',
        },
        {
            id: 'result',
            numeric: true,
            disablePadding: true,
            label: 'Result',
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: true,
            label: 'Status',
        },

    ];
    
    
    return (
        <Paper>
            <BetTableToolbar searchField={searchField} setSearchField={setSearchField} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => ( 
                                    <TableCell
                                    key={headCell.id} align="center"
                                    padding={headCell.disablePadding ? 'none' : 'normal'}
                                    >
                                        {headCell.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.title}>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                                <TableCell align="center">{row.sum}</TableCell>
                                <TableCell align="center">{row.odds}</TableCell>
                                <TableCell align="center">{row.result}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5,10,20]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </Paper>
    );
 };

export default BetTable;