import React from 'react';
import './Updates.css'; // Make sure to create and import your Updates.css for styling
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import solarPanelImage from './assets/images/solar-panel.jpg';
import saveWaterImage from './assets/images/save-water.jpg';
import environmentImage from './assets/images/environment.jpg';
import ecoInnovateImage from './assets/images/eco-innovate.jpg';
import greenTechImage from './assets/images/green-tech.jpg';
import venturesImage from './assets/images/ventures.jpg';

const updatesData = [
  {
    id: 1,
    companyName: "Eco Innovate",
    date: "March 16, 2024",
    content: "We are excited to announce a new solar panel initiative that will power 5,000 homes!",
    image: solarPanelImage, 
    logo: ecoInnovateImage,
  },
  {
    id: 2,
    companyName: "GreenTech Solutions",
    date: "March 15, 2024",
    content: "Our clean water project has reached a new milestone, providing fresh water to 10,000 people.",
    image: saveWaterImage,
    logo: greenTechImage,
  },
  {
    id: 3,
    companyName: "Renewable Ventures",
    date: "March 14, 2024",
    content: "Investment in ethical supply chains is not just good ethics, it's good business. Here's why...",
    image: environmentImage,
    logo: venturesImage,
  },
  // Add more updates as needed
];

const Updates = () => {
    return (
        <div className="updates-container">
            {updatesData.map((update) => (
                <div key={update.id} className="update-post">
                    <div className="update-header">
                        <img src={update.logo} alt="Logo" className="company-logo" /> {/* Logo next to the company name */}
                        <h2 className="company-name">{update.companyName}</h2>
                        <p className="update-date">{update.date}</p>
                    </div>
                    <p className="update-content">{update.content}</p>
                    {update.image && <img src={update.image} alt={update.companyName} className="update-image" />}
                    <div className="post-actions">
                        <button className="action-button like"><FaThumbsUp /> Like</button>
                        <button className="action-button comment"><FaComment /> Comment</button>
                        <button className="action-button share"><FaShare /> Share</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Updates;