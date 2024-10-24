import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ data }) => {
    const chartData = Object.keys(data).map((key, index) => ({ name: key, value: data[key], color: COLORS[index % COLORS.length] }));

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie dataKey="value" isAnimationActive={false} data={chartData} outerRadius={100} fill="#8884d8" label>
                    {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;
