import React from 'react';
import '../Style/Home.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import CarRentalIcon from '@mui/icons-material/CarRental';
import Warehouse1 from '../assets/warehouse1.jpg';
import Warehouse2 from '../assets/warehouse2.jpg';
import Warehouse3 from '../assets/warehouse3.jpg';
import WelcomeGif from '../assets/welcomgif.gif';

const Home = () => {
  return (
    <div className="home-container">
    <div className="welcome-section">
      <div className="welcome-message">
        <h1>Welcome to AutoYard</h1>
        <p>Your trusted destination for all your car needs.</p>
      </div>
      <img src={WelcomeGif} alt="Welcome GIF" className="welcome-gif" />
    </div>
      <div className="location-section">
        <h2>Our Locations</h2>
        <div className="location-cards">
          <div className="location-card">
            <img src={Warehouse1} alt="Warehouse 1" />
            <p>123 Main Street, Cityville, State, 12345</p>
            <LocationOnIcon />
          </div>
          <div className="location-card">
            <img src={Warehouse2} alt="Warehouse 2" />
            <p>456 Elm Avenue, Townsville, State, 56789</p>
            <LocationOnIcon />
          </div>
          <div className="location-card">
            <img src={Warehouse3} alt="Warehouse 3" />
            <p>789 Oak Boulevard, Villageton, State, 10111</p>
            <LocationOnIcon />
          </div>
        </div>
      </div>
      <div className="stats-section">
        <h2>Company Stats</h2>
        <div className="stats-cards">
          <div className="stats-card">
            <PeopleIcon />
            <p>100 Employees</p>
          </div>
          <div className="stats-card">
            <LocationOnIcon />
            <p>5 Locations</p>
          </div>
          <div className="stats-card">
            <CarRentalIcon />
            <p>200 Average Vehicle Trades per Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
