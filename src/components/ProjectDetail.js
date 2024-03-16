import React from 'react';
import { useParams } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ProjectDetail.css';

// ProjectDetail Component
const ProjectDetail = ({ projects }) => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === Number(projectId));

  // Sample data for the line chart
  const investmentData = [
    { month: 'Jan', investment: 10000 },
    { month: 'Feb', investment: 15000 },
    { month: 'Mar', investment: 25000 },
    { month: 'Apr', investment: 40000 },
    { month: 'May', investment: 30000 },
    { month: 'Jun', investment: 50000 },
    { month: 'Jul', investment: 60000 },
    { month: 'Aug', investment: 100000 },
    { month: 'Sep', investment: 120000 },
    // ...other months
  ];

  if (!project) {
    return <div>Project not found!</div>;
  }

  // Detail page layout
  return (
    <div className="project-detail-container">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
      <p>{project.description}</p>
      <div className="funding-info">
        <p><strong>Goal:</strong> ${project.goal}</p>
        <p><strong>Raised:</strong> ${project.raised}</p>
        {/* Example Progress Bar */}
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${(project.raised / project.goal) * 100}%` }}>
            {/* Show percentage inside the fill bar */}
            <span className="progress-bar-text">{`${((project.raised / project.goal) * 100).toFixed(2)}%`}</span>
          </div>
        </div>
      </div>
      {/* Responsive container for the line chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={investmentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      {/* You could add more sections with detailed information here */}
    </div>
  );
};

export default ProjectDetail;





