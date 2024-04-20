import React, { useState } from 'react';
import '../Style/SellCar.css';

const SellCar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    price: '',
    contactInfo: '',
    name: '',
    surname: '',
    email: '',
    number: '',
    address: '',
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form data
  };

  return (
    <div className="sell-car-container">
      <h2 className="sell-car-heading">Sell Your Car</h2>
      <div className="sell-car-subheading">
        Complete This form, get a quote so you get leave the old behind and go to the Next GEAR
      </div>
      <div className="sell-car-form">
        <div className="category-selection">
          <h3 className="category-heading">Category</h3>
          <div className="category-options">
            <div className={`category-option ${selectedCategory === 'car' ? 'selected' : ''}`} onClick={() => handleCategorySelect('car')}>Car</div>
            <div className={`category-option ${selectedCategory === 'bike' ? 'selected' : ''}`} onClick={() => handleCategorySelect('bike')}>Bike</div>
            <div className={`category-option ${selectedCategory === 'trailer' ? 'selected' : ''}`} onClick={() => handleCategorySelect('trailer')}>Trailer</div>
            <div className={`category-option ${selectedCategory === 'other' ? 'selected' : ''}`} onClick={() => handleCategorySelect('other')}>Other</div>
          </div>
        </div>
        {selectedCategory && (
          <>
            <form onSubmit={handleSubmit}>
              <h3 className="form-heading">Sell Your {selectedCategory}</h3>
              <input type="text" name="make" value={formData.make} onChange={handleFormChange} placeholder="Make" />
              <input type="text" name="model" value={formData.model} onChange={handleFormChange} placeholder="Model" />
              <input type="text" name="year" value={formData.year} onChange={handleFormChange} placeholder="Year" />
              <input type="text" name="mileage" value={formData.mileage} onChange={handleFormChange} placeholder="Mileage" />
              <input type="text" name="condition" value={formData.condition} onChange={handleFormChange} placeholder="Condition" />
              <input type="text" name="price" value={formData.price} onChange={handleFormChange} placeholder="Price" />
              <input type="text" name="contactInfo" value={formData.contactInfo} onChange={handleFormChange} placeholder="Contact Information" />
              <button type="submit">Submit</button>
            </form>
            <div className="about-you-container">
              <h3 className="about-you-heading">About You</h3>
              <form>
                <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Name" />
                <input type="text" name="surname" value={formData.surname} onChange={handleFormChange} placeholder="Surname" />
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Email" />
                <input type="text" name="number" value={formData.number} onChange={handleFormChange} placeholder="Phone Number" />
                <textarea name="address" value={formData.address} onChange={handleFormChange} placeholder="Address"></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SellCar;
