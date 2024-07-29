// src/app/campaigns-topics/page.tsx
"use client"; 

import React from 'react';
import './page.css';

const campaigns = [
  {
    date: "08",
    month: "June",
    title: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    location: "Kathmandu",
  },
  {
    date: "12",
    month: "June",
    title: "Rapid Response for Animals",
    time: "07:00 AM - 10:00 PM",
    location: "Kathmandu",
  },
  {
    date: "17",
    month: "June",
    title: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    location: "Kathmandu",
  },
];

const CampaignsTopicsPage: React.FC = () => {
  return (
    <div className="campaignsSection" id="campaigns-topics">
      <h1 className="title12">CALENDER</h1>
      <h2 className="title">Event Schedule</h2>
      <p className="subtitle1">
        We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.
      </p>
      <div className="campaignsContainer">
        {campaigns.map((campaign, index) => (
          <div key={index} className="campaignCard">
            <div className="date">
              <span className="day">{campaign.date}</span>
              <span className="month">{campaign.month}</span>
            </div>
            <h3 className="campaignTitle">{campaign.title}</h3>
            <p className="campaignTime">{campaign.time}</p>
            <p className="campaignLocation">{campaign.location}</p>
          </div>
        ))}
      </div>
      <button className="viewAllButton">View All &rarr;</button>
    </div>
  );
};

export default CampaignsTopicsPage;
