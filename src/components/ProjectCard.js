import React, { useState } from 'react';
import './ProjectCard.css'; // Make sure this is the correct path to your CSS file
import { FaRegHeart, FaComment, FaShare, FaThumbsUp, FaRegBookmark, FaBookmark } from 'react-icons/fa'; // Use appropriate icons
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    // Calculate the percentage raised towards the goal
    const percentageRaised = (project.raised / project.goal * 100).toFixed(0);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = (e) => {
        e.preventDefault(); // Prevent the default action
        e.stopPropagation(); // Stop the click event from propagating to parent elements
        setIsBookmarked(!isBookmarked);
    };
    const tags = project.tags || [];

    return (
        <Link to={`/projects/${project.id}`} className="project-card project-card-link">
            <div className="project-card">
                <div className="bookmark-button">
                    <i className="fa fa-bookmark-o" aria-hidden="true"></i> {/* Example for Font Awesome */}
                </div>
                <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                    <div className="project-title">{project.title}</div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-progress-bar">
                        <div className="project-progress" style={{ width: `${percentageRaised}%` }}></div>
                    </div>
                    <div className="project-funding">
                        <span className="project-raised">${project.raised.toLocaleString()} Raised</span>
                        <span className="project-goal">Goal: ${project.goal.toLocaleString()}</span>
                    </div>
                    <div className="project-target">{`${percentageRaised}% of Goal`}</div>
                </div>
                <button className={`bookmark-btn ${isBookmarked ? 'active' : ''}`} onClick={handleBookmarkClick}>
                    {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
                </button>
                <div className="project-tags">
                    {tags.map(tag => (
                        <span className={`tag ${tag.toLowerCase()}`} key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;

