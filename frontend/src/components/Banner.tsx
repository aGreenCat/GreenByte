import React from 'react';
import './Banner.css';
import GB from '../assets/GB.svg'; // Adjust the file path and extension as needed

interface BannerProps {
  onAboutMeClick: () => void;
}

const Banner: React.FC<BannerProps> = ({ onAboutMeClick }) => {
  return (
    <div className="banner">
    <img src={GB} alt="GreenByte Logo" className="logo" />
      <h1 className="banner-title">Welcome to Greenbyte</h1>
      <div className="button">
      <button className="about-me-button" onClick={onAboutMeClick}>
        About Us 
        </button>
        <button className="leaderboard-button" onClick={onAboutMeClick}>
            Leaderboard
      </button>
      </div>

    </div>
  );
};

export default Banner;