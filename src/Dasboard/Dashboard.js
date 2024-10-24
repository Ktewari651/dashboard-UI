import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import dataCSV from '../data-to-visualize/Electric_Vehicle_Population_Data.csv'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import EVTable from './components/EVTable';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
     const [data, setData] = useState([]);

    useEffect(() => {
        fetch(dataCSV)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: function(results) {
                        setData(results.data);
                    }
                });
            });
    }, []);

    // Get insights like total number of vehicles, distribution by make, model year, and cities.
    const totalVehicles = data.length;
    const makeDistribution = {};
    const yearDistribution = {};
    
    data.forEach((item) => {
        const make = item.Make;
        const year = item['Model Year'];

        if (make) makeDistribution[make] = (makeDistribution[make] || 0) + 1;
        if (year) yearDistribution[year] = (yearDistribution[year] || 0) + 1;
    });

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">Electric Vehicle Population Dashboard</Typography>
            <Grid container spacing={3}>
                {/* Total Vehicles */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h6">Total Vehicles</Typography>
                        <Typography variant="h3">{totalVehicles}</Typography>
                    </Paper>
                </Grid>
                {/* Bar Chart for Distribution by Make */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6">Vehicle Distribution by Month</Typography>
                        <BarChart data={makeDistribution} />
                    </Paper>
                </Grid>
                {/* Line Chart for Distribution by Model Year */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6">Vehicle Distribution by Model Year</Typography>
                        <LineChart data={yearDistribution} />
                    </Paper>
                </Grid>
                {/* Pie Chart for Distribution by City */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6">Vehicle Distribution by City</Typography>
                        <PieChart data={makeDistribution} />
                    </Paper>
                </Grid>
                {/* Table for Raw Data */}
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: '20px' }}>
                        <Typography variant="h6">Raw Data Table</Typography>
                        <EVTable data={data} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
