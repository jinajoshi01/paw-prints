//src/app/about-us/page.tsx
import React from 'react';
import './page.css';
import Image from 'next/image';
import myImage from '../../../public/Image/dog.png';

const AboutPage: React.FC = () => {
  return (
    <div className="aboutSection">
      <h3 className="subtitle">WHO WE ARE AND OUR MISSION</h3>
      <h1 className="title">About our shelter and values</h1>
      <p className="description">
        We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
      </p>
      <div className="contentContainer">
        <div className="textContent">
          <h2>Your donations help us run important projects</h2>
          <p>
            As a pioneer of the no-kill movement, <strong>Paw Print</strong> leads the way with national and international programs designed to increase adoptions and raise awareness about the plight of homeless animals, continuing to make a significant impact.
          </p>
          <a href="#donate" className="donateButton">Donate for pets &rarr;</a>
        </div>
        <div className='image'>
        <Image src={myImage} alt="Description" />
       </div>
      </div>
    </div>
  );
};

export default AboutPage;
