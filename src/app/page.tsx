// src/app/page.tsx

"use client"; 

import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import AboutPage from './about-us/page';
import AnimalsPage from './animals/page';
import CampaignsTopicsPage from './campaigns-topics/page';
import ContactPage from './contact/page';
import VolunteerPage from './volunteer/page';

import DonationSection from './donation/page';
import './page.css';

const HomePage: React.FC = () => {
  return (
    <div>
    
      <div className="mainContent">
        <NavBar />
        <div className="pageContainer">
          <section id="home" className="section">
           
            <Image
              src="/Image/cat.png"
              width={600}
              height={400}
              className="pageImage"
              alt="Cat"
            /> 
            <div className="content">
              <h4>SAVING LIVES EVERY DAY</h4>
              <h1 className='h'>Saving lives of cats and dogs across world</h1>
              <p className='p'>We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
              <span className="button" onClick={() => document.getElementById('about')?.scrollIntoView()}>About Us &rarr;</span>
            </div>
          </section>
        </div>
      </div>

     
      <div className="sectionsContainer">
        <section id="about" className="section">
          <AboutPage />
        </section>
        <section id="animals" className="section">
          <AnimalsPage />
        </section>
        <section id="donation" className="section">
          <DonationSection />
        </section>
        <section id="campaigns-topics" className="section">
          <CampaignsTopicsPage />
        </section>
        <section id="volunteer" className="section">
          <VolunteerPage />
        </section>
        <section id="contact" className="section">
          <ContactPage />
        </section>
        
      </div>
    </div>
  );
};

export default HomePage;
