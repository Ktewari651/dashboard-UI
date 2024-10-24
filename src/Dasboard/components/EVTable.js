import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@mui/material';

const EVTable = ({ data }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>VIN (1-10)</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Model Year</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>County</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.slice(0, 10).map((row, index) => (
                    <TableRow key={index}>
                        <TableCell>{row['VIN (1-10)']}</TableCell>
                        <TableCell>{row.Make}</TableCell>
                        <TableCell>{row.Model}</TableCell>
                        <TableCell>{row['Model Year']}</TableCell>
                        <TableCell>{row.City}</TableCell>
                        <TableCell>{row.County}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default EVTable;
