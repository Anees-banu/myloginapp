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
  // Sample data
  const lineData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 200 },
    { name: 'May', value: 350 },
    { name: 'Jun', value: 420 },
  ];

  const pieData = [
    { name: 'Sales', value: 50 },
    { name: 'Marketing', value: 30 },
    { name: 'Support', value: 20 },
  ];

  const colors = ['#dc2626', '#f87171', '#fee2e2'];

  return (
    <div className="dashboard-layout">
      {/* Sidebar with profile */}
      <div className="sidebar">
        <Profile />
      </div>

      {/* Main content */}
      <div className="main-content">
        <h2>Dashboard</h2>

        {/* Line Chart Section */}
        <div className="chart-section">
          <div className="section-heading">Monthly Sales Trend</div>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#dc2626" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart Section */}
        <div className="pie-section">
          <div className="section-heading">Department Performance</div>
          <div className="pie-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
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
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
