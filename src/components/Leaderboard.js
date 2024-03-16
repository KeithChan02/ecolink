import React from 'react';
import './Leaderboard.css'; // Ensure this CSS file exists and is correctly linked
import bcgLogo from './assets/images/bcg-logo.png';
import jpMorganLogo from './assets/images/jp-morgan-logo.jpg';
import astraZenecaLogo from './assets/images/astrazeneca-logo.jpg';
import ubsLogo from './assets/images/ubs-logo.jpg';
import pfizerLogo from './assets/images/pfizer-logo.jpg';
import googleLogo from './assets/images/google-logo.jpg';
import microsoftLogo from './assets/images/microsoft-logo.jpg';
import oracleLogo from './assets/images/oracle-logo.jpg';
import nvidiaLogo from './assets/images/nvidia-logo.jpg';
import openAILogo from './assets/images/openai-logo.jpg';

// Sample data for companies including logos
const companies = [
    {
        id: 1,
        name: "Boston Consulting Group",
        totalInvestment: 1500000,
        logo: bcgLogo
    },
    {
        id: 2,
        name: "JP Morgan Chase & Co.",
        totalInvestment: 1250000,
        logo: jpMorganLogo
    },
    {
        id: 3,
        name: "AstraZeneca",
        totalInvestment: 950000,
        logo: astraZenecaLogo
    },
    {
        id: 4,
        name: "UBS",
        totalInvestment: 750000,
        logo: ubsLogo
    },
    {
        id: 5,
        name: "Pfizer",
        totalInvestment: 600000,
        logo: pfizerLogo
    },
    {
        id: 6,
        name: "Google",
        totalInvestment: 500000,
        logo: googleLogo
    },
    {
        id: 7,
        name: "Microsoft",
        totalInvestment: 400000,
        logo: microsoftLogo
    },
    {
        id: 8,
        name: "Oracle",
        totalInvestment: 300000,
        logo: oracleLogo
    },
    {
        id: 9,
        name: "Nvidia",
        totalInvestment: 200000,
        logo: nvidiaLogo
    },
    {
        id: 10,
        name: "OpenAI",
        totalInvestment: 100000,
        logo: openAILogo
    }
    // Add more companies as needed
];

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            <h1>Leaderboard</h1>
            <ul>
                {companies.map((company, index) => (
                    <li key={company.id} className="leaderboard-entry">
                        <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
                        <span className="rank">{index + 1}.</span>
                        <span className="company-name">{company.name}</span>
                        <span className="investment-amount">Total Invested: ${company.totalInvestment.toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;

