import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import './dashboard.css';
import Profile from './Profile';

function Dashboard() {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 200 },
  ];

  const pieData = [
    { name: 'Sales', value: 50 },
    { name: 'Marketing', value: 30 },
    { name: 'Support', value: 20 },
  ];

  const colors = ['#dc2626', '#f87171', '#fee2e2'];

  return (
    <div className="dashboard-layout">
      {/* Sidebar with Profile */}
      <div className="sidebar">
        <Profile />
      </div>

      {/* Main dashboard content */}
      <div className="main-content">
        <h2>Dashboard</h2>

        <div className="chart-section">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#dc2626" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="pie-section">
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#dc2626"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

