// src/app/animals/page.tsx
import React, { useState } from 'react';
import './page.css';

const AnimalsPage: React.FC = () => {
  
  const [projects, setProjects] = useState([
    { id: 1, goal: 1340, raised: 800, title: 'New chance for animals', imgSrc: '/Image/animal1.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, goal: 1340, raised: 800, title: 'Help the eco system', imgSrc: '/Image/animal2.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, goal: 1340, raised: 800, title: 'New Sustainability', imgSrc: '/Image/animal3.png', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
  ]);

  return (
    <div className="animalsSection">
      <h1 className="sectionTitle1">A HELP TO THOSE WHO NEED IT</h1>
      <h2 className="sectionTitle">Each donation is an essential</h2>
      <p className="sectionSubtitle">
        We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
      </p>
      <div className="cardsContainer">
        {projects.map(project => (
          <div key={project.id} className="card">
            <img
              src={project.imgSrc} 
              alt={project.title}
              className="cardImage"
            />
            <div className="cardContent">
              <div className="cardStats">
                <span className="goal">GOAL: ${project.goal}</span>
                <span className="raised">RAISED: ${project.raised}</span>
              </div>
              <div className="progressBar">
                <div className="progress" style={{ width: `${(project.raised / project.goal) * 100}%` }}></div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#details" className="detailsButton">View Details &rarr;</a>
            </div>
          </div>
        ))}
      </div>
      <a href="#all-causes" className="viewAllButton">View All Cause &rarr;</a>
    </div>
  );
};

export default AnimalsPage;
