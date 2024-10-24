import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => {
    const chartData = Object.keys(data).map(key => ({ name: key, count: data[key] }));
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;
