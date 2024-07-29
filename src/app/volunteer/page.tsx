// src/app/volunteer/page.tsx
"use client";
import { useState, useEffect } from 'react';
import './page.css'; 
import Image from 'next/image';

const VolunteerPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json');
        const data = await response.json();

        const adjustedTestimonials = data.testimonial.map((testimonial: any, index: number) => {
          const localImagePath = `/Image/${index + 1}.png`; 
          return {
            ...testimonial,
            imagePath: localImagePath
          };
        });

        setTestimonials(adjustedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return <div>Loading...</div>;
  }

  const { fullName, content, imagePath } = testimonials[currentIndex];

  return (
    <div className="volunteer-section">
      <h2 className="volunteer-heading">TESTIMONIALS</h2>
      <h3 className="volunteer-subheading">Check what our volunteers are saying</h3>
      <p className="volunteer-description">We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
      <div className="volunteer-testimonial">
        <Image
          src={imagePath}
          alt={fullName}
          className="volunteer-image"
          width={300} 
          height={300} 
        />
        <p className="volunteer-content">&quot;{content}&quot;</p>
        <h4 className="volunteer-author">{fullName}</h4>
        <div className="volunteer-button-container">
          <button onClick={handlePrev} className="volunteer-button">&lt;</button>
          <button onClick={handleNext} className="volunteer-button">&gt;</button>
        </div>
      </div>

      <div className="get-involved-section">
        <h2>Get Involved</h2>
        <p>Our work is made possible by the generosity of people like you, who have contributed to our mission to improve the lives of all animals.</p>
        <div className="get-involved-buttons">
          <button>Adopt & Donate to help us →</button>
          <button>Volunteering opportunities →</button>
        </div>
        <div className="get-involved-images">
          <Image
            src="/Image/get-involved-dog.png"
            alt="Dog"
            className="dog-image"
            width={500} 
            height={300} 
          />
          <Image
            src="/Image/get-involved-cat.png"
            alt="Cat"
            className="cat-image"
            width={500} 
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;
