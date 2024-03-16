import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Portfolio.css';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const Portfolio = () => {
    // Sample data for projects a company has invested in
    const investments = [
        { project: 'Community Solar Power', amount: 50000 },
        { project: 'Clean Water for All', amount: 30000 },
        { project: 'Ethical Supply Chain Development', amount: 20000 },
        { project: 'Renewable Wind Energy Expansion', amount: 80000 },
        { project: 'Affordable Housing Development', amount: 10000 },
        { project: 'Tech Education for Underserved Youth', amount: 60000 },
        // Feel free to add more projects as needed
    ];

    // Preparing data for the pie chart
    const data = {
        labels: investments.map((investment) => investment.project),
        datasets: [{
            label: 'Investment Distribution',
            data: investments.map((investment) => investment.amount),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                // Add more colors as needed for each project
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                // Add more border colors as needed for each project
            ],
            borderWidth: 1,
        }],
    };

    const options = {
        plugins: {
            datalabels: {
                color: '#444', // A color that contrasts with the pie slices
                font: {
                    weight: 'bold',
                    size: 18 // Adjust size as needed
                },
                formatter: (value, context) => {
                    const dataSum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    let percentage = (value / dataSum * 100).toFixed(2) + "%";
                    return percentage;
                },
                anchor: 'center', // Centers the labels
                align: 'center', // Aligns the labels' anchor point to the center
                // No offset needed when labels are centered
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = 'Investment Amount: $'; // Fixed label text
                        if (context.parsed !== null) {
                            label += context.parsed.toLocaleString(); // Append the formatted value
                        }
                        return label;
                    }
                }
            },
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Investment Distribution by Project',
            },
        },
        // ... other options
    };


    return (
        <div className="portfolio" style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
            <h1>Investment Portfolio</h1>
            <div className="chart" style={{ marginTop: '20px' }}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default Portfolio;

