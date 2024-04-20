import React from 'react';
import carData from '../Components/carData';
import '../Style/BuyCar.css';
import dummyCarImage from '../assets/dummycar.jpg';

const BuyCars = () => {
  return (
    <div>
      <h1 className='heading'>Available Cars</h1>
      <div className="car-container">
        {carData.map((car) => (
          <div key={car.id} className="car-card">
            <img src={dummyCarImage} alt="Car" className="car-image" />
            <div className="car-details">
              <h2>{car.brand} {car.model}</h2>
              <p>Year: {car.year}</p>
              <p>Price: ${car.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCars;
