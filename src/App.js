import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import Portfolio from './components/Portfolio';
import Updates from './components/Updates';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import solarPanelImage from './assets/images/solar-panel.jpg';
import cleanWaterImage from './assets/images/clean-water.jpg';
import ethicalSupplyChainImage from './assets/images/supply-chain.jpg';
import windEnergyImage from './assets/images/wind-energy.jpg';
import affordableHousingImage from './assets/images/affordable-housing.jpeg';
import coralReefImage from './assets/images/coral-reef.jpg';
import techEducationImage from './assets/images/tech-education.jpg';
import urbanMobilityImage from './assets/images/green-urban.jpg';
import zeroWasteImage from './assets/images/zero-waste.jpg';

const esgProjects = [
  {
    id: 1,
    title: "Community Solar Power Initiative",
    description: "Supporting community power through solar energy, aiming to empower and sustain underserved regions with clean energy solutions.",
    category: "Environmental",
    tags: ['Energy', 'Sustainability'],
    goal: 500000, // in USD
    raised: 450000, // in USD
    image: solarPanelImage
  },
  {
    id: 2,
    title: "Clean Water for All",
    description: "Enhancing water availability with well and filtration systems, providing vital clean water resources to remote communities.",
    category: "Social",
    tags: ['Water', 'Health'],
    goal: 300000,
    raised: 240000,
    image: cleanWaterImage
  },
  {
    id: 3,
    title: "Ethical Supply Chain Development",
    description: "Fostering ethical industry standards with transparent and fair supply chain practices for global worker rights protection.",
    category: "Governance",
    tags: ['Ethics', 'Trade'],
    goal: 250000,
    raised: 175000,
    image: ethicalSupplyChainImage
  },
  {
    id: 4,
    title: "Renewable Wind Energy Expansion",
    description: "Boosting renewable wind energy, reducing fossil fuel dependence by expanding wind farm capabilities for a sustainable future.",
    category: "Environmental",
    tags: ['Wind', 'Renewable'],
    goal: 750000,
    raised: 450000,
    image: windEnergyImage
  },
  {
    id: 5,
    title: "Affordable Housing Development",
    description: "Creating sustainable, cost-effective housing to enhance living standards for families with limited income, promoting social equity.",
    category: "Social",
    tags: ['Housing', 'Equity'],
    goal: 1000000,
    raised: 500000,
    image: affordableHousingImage
  },
  {
    id: 6,
    title: "Coral Reef Restoration Project",
    description: "Aiming to restore coral reefs, this initiative enhances marine diversity and aids coastal areas' resilience.",
    category: "Environmental",
    tags: ['Marine', 'Restoration'],
    goal: 200000,
    raised: 80000,
    image: coralReefImage
  },
  {
    id: 7,
    title: "Tech Education for Underserved Youth",
    description: "Tech education initiatives to equip underserved youth with digital skills, setting a strong foundation for their future careers.",
    category: "Social",
    tags: ['Education', 'Technology'],
    goal: 150000,
    raised: 45000,
    image: techEducationImage
  },
  {
    id: 8,
    title: "Green Urban Mobility Solutions",
    description: "Advancing urban mobility with eco-friendly transport solutions, aiming to lower carbon footprints and enrich urban life quality.",
    category: "Environmental",
    tags: ['Mobility', 'Urban'],
    goal: 500000,
    raised: 100000,
    image: urbanMobilityImage
  },
  {
    id: 9,
    title: "Zero-Waste Manufacturing Processes",
    description: "Adopting zero-waste in manufacturing, revolutionizing processes to curb industrial waste and protect the environment effectively.",
    category: "Governance",
    tags: ['Zero-Waste', 'Manufacturing'],
    goal: 300000,
    raised: 30000,
    image: zeroWasteImage
  }
  // Add more projects as necessary
];

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/projects" element={<ProjectsPage projects={esgProjects} />} />
          <Route path="/projects/:projectId" element={<ProjectDetail projects={esgProjects} />} />
          <Route path="/" element={
            <>
              <section className="hero">
                <h1>Invest in ESG</h1>
                <button
                  className="explore-now-btn"
                  onClick={() => scrollToSection('recommended-organizations')}
                >
                  Explore Now
                </button>
              </section>
              <main>
                <section id="recommended-organizations" className="projects">
                  <h2>Recommended Organizations</h2>
                  <div className="projects-container">
                    {esgProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </section>
                {/* Additional sections can be added here */}
              </main>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
