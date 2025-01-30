import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import MetaTags from '../../seo/MetaTags';
import './Analytics.scss';  // SCSS dosyasını buraya dahil ettik

// Örnek veri
const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
];

function Analytics() {
  return (
    <div className="analytics-container p-6">
      <MetaTags title="Analytics - My App" description="Analyze data trends." />
      <h2 className="text-xl font-bold mb-4">User Analytics</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#1A73E8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Analytics;
