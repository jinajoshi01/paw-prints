/* src/app/donation/page.tsx */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import './page.css';

const DonationSection: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState<number | string>('');
  const [donationSubmitted, setDonationSubmitted] = useState(false); 

  const goal = 1340;
  const raised = 800;
  const progress = (raised / goal) * 100;

  const handleButtonClick = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value);
  };

  const handleDonateNow = () => {
    if (donationAmount) { 
      setDonationAmount('');
      const donateElement = document.getElementById('donate');
      if (donateElement) {
        donateElement.scrollIntoView({ behavior: 'smooth' });
      }

      setDonationSubmitted(true);
      setTimeout(() => setDonationSubmitted(false), 3000); 
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <div className="donationSection" id="donate">
      <div className="imageContainer">
        <Image
          src="/Image/Donation.png" 
          alt="Dog"
          width={600}
          height={400}
          className="donationImage"
        />
        <div className="overlay">
          <span>Pawprints</span>
        </div>
      </div>
      <div className="donationContent">
        <h3 className="donationSubtitle">A HELP TO THOSE WHO NEED IT</h3>
        <h1 className="donationTitle">Transform lives with donations</h1>
        <p className="donationDescription">
          Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!
        </p>
        <div className="goalContainer">
          <div className="goalText">
            <span>GOAL: ${goal}</span>
            <span>RAISED: ${raised}</span>
          </div>
          <div className="progressBar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress.toFixed(2)}%
            </div>
          </div>
        </div>
        <div className="donationOptions">
          <input
            type="number"
            placeholder="$10.00"
            className="donationInput"
            value={donationAmount}
            onChange={handleInputChange}
          />
          <div className="donationButtons">
            <button onClick={() => handleButtonClick(10)}>$10.00</button>
            <button onClick={() => handleButtonClick(25)}>$25.00</button>
            <button onClick={() => handleButtonClick(50)}>$50.00</button>
            <button onClick={() => handleButtonClick(100)}>$100.00</button>
            <button onClick={() => handleButtonClick(250)}>$250.00</button>
          </div>
        </div>
        <button 
          className="donateNowButton" 
          onClick={handleDonateNow}
        >
          {donationSubmitted ? 'Thank you for your donation!' : 'Donate Now'}
        </button>
      </div>
    </div>
  );
};

export default DonationSection;
