import React from 'react';
import '../Style/Services.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SecurityIcon from '@mui/icons-material/Security';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BuildIcon from '@mui/icons-material/Build';

const Services = () => {
  return (
    <div className="services-container">
      {/* Finance my new Car */}
      <div className="service-item">
        <h3 className="service-heading">Finance my new Car</h3>
        <div className="card">
          <AttachMoneyIcon className="icon" />
          <h4>What can I afford?</h4>
          <p>Explore your budget and financing options.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="card">
          <DirectionsCarIcon className="icon" />
          <h4>Car Finance</h4>
          <p>Find the best car financing deals.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="card">
          <CreditCardIcon className="icon" />
          <h4>Credit</h4>
          <p>Learn about credit options for buying a car.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="card">
          <SwapHorizIcon className="icon" />
          <h4>Car Trade Ins</h4>
          <p>Trade in your old car for a new one.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>

      {/* Insure my Car */}
      <div className="service-item">
        <h3 className="service-heading">Insure my Car</h3>
        <div className="card">
          <SecurityIcon className="icon" />
          <h4>Car Insurance</h4>
          <p>Find the right insurance coverage for your car.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="card">
          <LocationOnIcon className="icon" />
          <h4>Tracking</h4>
          <p>Track your car's location with advanced tracking solutions.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="card">
          <BuildIcon className="icon" />
          <h4>Service Plans</h4>
          <p>Choose from a variety of service plans for your car.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
        <div className="card">
          <SecurityIcon className="icon" />
          <h4>Scratch and Wheel Cover</h4>
          <p>Protect your car from scratches and wheel damage.</p>
          <button className="learn-more-btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
