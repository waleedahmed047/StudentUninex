// ProfileViewChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './graph.css';

const Graph = () => {
  const data = [
    { name: 'Week 1', profileViews: 50 },
    { name: 'Week 2', profileViews: 40 },
    { name: 'Week 3', profileViews: 60 },
    { name: 'Week 4', profileViews: 55 },
    { name: 'Week 5', profileViews: 70 },
    { name: 'Week 6', profileViews: 36 },
    { name: 'Week 7', profileViews: 80 },
    { name: 'Week 8', profileViews: 90 },
  ];

  return (
    <div className='analytic-graph'>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ fontSize: '12px' }} />
          <YAxis style={{ fontSize: '12px' }} />
          <Tooltip contentStyle={{ fontSize: '12px' }} />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line type="monotone" dataKey="profileViews" stroke="#00bcd4" dot={{ fill: '#000', strokeWidth: 2 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
