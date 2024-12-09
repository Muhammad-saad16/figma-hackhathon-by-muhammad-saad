'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


const carData = [
  { name: "Koenigsegg", type: "Sport", image: "/car.png", fuel: "90L", transmission: "Manual", capacity: "2 People", price: 99.00 },
  { name: "Nissan GT - R", type: "Sport", image: "/car2.png", fuel: "80L", transmission: "Manual", capacity: "2 People", price: 80.00 },
  { name: "Rolls - Royce", type: "Sport", image: "/car3.png", fuel: "70L", transmission: "Manual", capacity: "4 People", price: 96.00 },
  { name: "All New Rush", type: "SUV", image: "/car4.png", fuel: "70L", transmission: "Manual", capacity: "6 People", price: 72.00 },
  { name: "CR - V", type: "SUV", image: "/car5.png", fuel: "80L", transmission: "Manual", capacity: "6 People", price: 80.00 },
  { name: "All New Terios", type: "SUV", image: "/car6.png", fuel: "90L", transmission: "Manual", capacity: "6 People", price: 74.00 },
  { name: "MG ZX Exclusice", type: "Hatchback", image: "/car8.png", fuel: "70L", transmission: "Electric", capacity: "4 People", price: 76.00 },
  { name: "New MG ZS", type: "SUV", image: "/car9.png", fuel: "80L", transmission: "Manual", capacity: "6 People", price: 80.00 },
  { name: "MG ZX Excite", type: "Hatchback", image: "/car10.png", fuel: "90L", transmission: "Electric", capacity: "4 People", price: 74.00 },
];

export default function CarRental() {
  const [priceRange, setPriceRange] = useState(100)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFavorite = (index: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(index)) {
        newFavorites.delete(index)
      } else {
        newFavorites.add(index)
      }
      return newFavorites
    })
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="filter-section">
          <h3>TYPE</h3>
          <div className="checkbox-group">
            {[
              { label: 'Sport', count: 10 },
              { label: 'SUV', count: 12 },
              { label: 'MPV', count: 16 },
              { label: 'Sedan', count: 20 },
              { label: 'Coupe', count: 14 },
              { label: 'Hatchback', count: 14 },
            ].map(({ label, count }) => (
              <label key={label}>
                <input type="checkbox" defaultChecked={label === 'Sport' || label === 'SUV'} />
                {label} ({count})
              </label>
            ))}
          </div>
        </div>
        <div className="filter-section">
          <h3>CAPACITY</h3>
          <div className="checkbox-group">
            {[
              { label: '2 Person', count: 10 },
              { label: '4 Person', count: 14 },
              { label: '6 Person', count: 12 },
              { label: '8 or More', count: 16 },
            ].map(({ label, count }) => (
              <label key={label}>
                <input type="checkbox" defaultChecked={label === '2 Person' || label === '8 or More'} />
                {label} ({count})
              </label>
            ))}
          </div>
        </div>
        <div className="filter-section">
          <h3>PRICE</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange}
            className="slider"
            onChange={(e) => setPriceRange(Number(e.target.value))}
          />
          <p>Max. ${priceRange.toFixed(2)}</p>
        </div>
      </aside>
      <main className="main-content">
        <div className="search-section">
          {['Pick - Up', 'Drop - Off'].map((title) => (
            <div key={title} className="search-box">
              <h3>{title}</h3>
              <div className="search-inputs">
                {['Locations', 'Date', 'Time'].map((label) => (
                  <div key={label} className="input-group">
                    <label htmlFor={`${title.toLowerCase()}-${label.toLowerCase()}`}>{label}</label>
                    <select id={`${title.toLowerCase()}-${label.toLowerCase()}`}>
                      <option>{`Select your ${label.toLowerCase()}`}</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="car-grid">
  {carData.map((car, index) => (
    <Link href="/car-detail" key={index} className="car-card">
      <div className="car-header">
        <h3 className="text-lg font-bold">{car.name}</h3>
        <p>{car.type}</p>
        <button
          className={`favorite-btn ${favorites.has(index) ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault(); // Prevent link navigation on button click
            toggleFavorite(index);
          }}
        >
          {favorites.has(index) ? '❤️' : '❤'}
        </button>
      </div>
      <Image src={car.image} alt={car.name} width={300} height={200} className="car-image" />
      <div className="car-details">
        <span>⛽ {car.fuel}</span>
        <span>⚙ {car.transmission}</span>
        <span>👤 {car.capacity}</span>
      </div>
      <div className="car-footer">
        <p className="price">${car.price.toFixed(2)}/<span>day</span></p>
        <button className="rent-btn">Rent Now</button>
      </div>
    </Link>
  ))}
</div>

 <button className="show-more-btn">Show more car</button>
      </main>
      <style jsx>{`
        .container {
          display: flex;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .sidebar {
          width: 250px;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .filter-section {
          margin-bottom: 20px;
        }
        .filter-section h3 {
          margin-bottom: 10px;
          color: #1a202c;
        }
        .checkbox-group label {
          display: block;
          margin-bottom: 10px;
          color: #4a5568;
        }
        .slider {
          width: 100%;
          margin-bottom: 10px;
        }
        .main-content {
          flex-grow: 1;
          padding-left: 20px;
        }
        .search-section {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .search-box {
          flex: 1;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .search-inputs {
          display: flex;
          gap: 10px;
        }
        .input-group {
          flex: 1;
        }
        .input-group label {
          display: block;
          margin-bottom: 5px;
          color: #4a5568;
        }
        .input-group select {
          width: 100%;
          padding: 5px;
          border: 1px solid #e2e8f0;
          border-radius: 5px;
        }
        .car-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 20px;
        }
        .car-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .car-header {
          padding: 15px;
          position: relative;
        }
        .car-header h3 {
          margin-bottom: 5px;
        }
        .favorite-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #e53e3e;
        }
        .car-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        .car-details {
          display: flex;
          justify-content: flex-start;
          gap: 20px;
          padding: 15px;
          color: #90A3BF;
        }
        .car-details span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .car-details svg {
          width: 24px;
          height: 24px;
        }
        .car-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px;
          border-top: 1px solid #e2e8f0;
        }
        .price {
          font-size: 18px;
          font-weight: bold;
        }
        .price span {
          font-size: 14px;
          font-weight: normal;
          color: #718096;
        }
          .product-title {
  font-weight: bold;
  font-size: 1.2em; /* Adjust size as needed */
}
        .rent-btn {
          background-color: #3563e9;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
        }
        .show-more-btn {
          display: block;
          width: 200px;
          margin: 0 auto;
          padding: 10px;
          background-color: #3563e9;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
            margin-bottom: 20px;
          }
          .main-content {
            padding-left: 0;
          }
          .search-section {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}

