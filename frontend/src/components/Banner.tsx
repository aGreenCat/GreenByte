import React from 'react';
import './Banner.css';
import clearGB from '../assets/clearGB.png'; // Adjust the file path and extension as needed

interface BannerProps {
  onAboutMeClick?: () => void ;
  onLeaderboardClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({ onAboutMeClick, onLeaderboardClick}) => {
  return (
    <div className="banner">
    <img src={clearGB} alt="GreenByte Logo" className="logo"/>
      <h1 className="banner-title">Welcome to Greenbyte</h1>
      <div className="button">
      <button className="about-me-button" onClick={onAboutMeClick}>
        About Us 
        </button>
        <button className="leaderboard-button" onClick={onLeaderboardClick}>
            Leaderboard
      </button>
      </div>

    </div>
  );
};

export default Banner;