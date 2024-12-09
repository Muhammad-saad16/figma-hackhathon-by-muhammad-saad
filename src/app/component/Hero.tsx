'use client'

import React from "react";
import Image from "next/image";

interface SelectFieldProps {
  label: string;
  options: string[];
}

interface RentalSectionProps {
  title: string;
  icon: string;
}

interface CarData {
  name: string;
  type: string;
  image: string;
  fuel: string;
  transmission: string;
  capacity: string;
  price: number;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, options }) => {
  return (
    <div>
      <label htmlFor={label.toLowerCase()} className="block font-semibold">
        {label}
      </label>
      <select 
        id={label.toLowerCase()} 
        className="block w-full mt-1 border rounded px-2 py-1"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const RentalSection: React.FC<RentalSectionProps> = ({ title, icon }) => {
  return (
    <div className="p-4 w-full lg:w-[600px] bg-white h-auto lg:h-40 rounded-xl">
      <div className="flex items-center">
        <img src={icon} alt={title} className="w-5" />
        <h2 className="ml-3 text-lg font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <SelectField label="Locations" options={["Select your city", "Karachi", "Lahore", "Islamabad"]} />
        <SelectField label="Date" options={["Select Date", "17-07-2023"]} />
        <SelectField label="Time" options={["Select Time", "12:00"]} />
      </div>
    </div>
  );
};

const CarCard: React.FC<CarData> = ({ name, type, image, fuel, transmission, capacity, price }) => {
  return (
    <div className="shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative h-96">
      <div className="text-[#ED3F3F] w-11 h-10 flex items-center justify-center cursor-pointer absolute top-3 right-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          className="text-[#ED3F3F] inline-block"
          viewBox="0 0 64 64"
        >
          <path
            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
          />
        </svg>
      </div>

      <div className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-2 left-7">
        <h2>{name}</h2>
      </div>
      <div className="text-[#90A3BF] w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-7 left-2">
        <span className="block">{type}</span>
      </div>

      <div className="w-5/6 h-[250px] p-2 overflow-hidden mx-auto">
        <Image
          src={image}
          alt={name}
          width={190}
          height={180}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="pt-4 bg-white">
        <div className="flex justify-between px-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-[#90A3BF]" viewBox="0 0 20 20">
              <path fill="currentColor" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
            </svg>
            <span className="ml-2 text-[#90A3BF]">{fuel}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-[#90A3BF]" viewBox="0 0 20 20">
              <path fill="currentColor" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
            </svg>
            <span className="ml-2 text-[#90A3BF]">{transmission}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-[#90A3BF]" viewBox="0 0 20 20">
              <path fill="currentColor" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
            </svg>
            <span className="ml-2 text-[#90A3BF]">{capacity}</span>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 mt-4 pb-4">
          <div>
            <span className="text-xl font-bold">${price.toFixed(2)}/</span>
            <span className="text-sm text-gray-400">day</span>
          </div>
          <button className="bg-[#3563E9] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const carData: CarData[] = [
    {
      name: "Koenigsegg",
      type: "Sport",
      image: "/car.png",
      fuel: "90L",
      transmission: "Manual",
      capacity: "2 People",
      price: 99.00
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/car3.png",
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80.00
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      image: "/car4.png",
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
      price: 96.00
    },
    {
      name: "Nissan GT-R",
      type: "Sport",
      image: "/car5.png",
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
      price: 80.00
    }
  ];

  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full mt-10">
      {/* Pick-Up and Drop-Off Section */}
      <div className="container px-5 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <RentalSection title="Pick - Up" icon="/mark.png" />
          
          {/* Switch Icon */}
          <div className="flex justify-center lg:block">
            <img src="/Switch.png" alt="Switch Icon" className="w-16 h-16 lg:w-25 lg:h-20" />
          </div>
          
          <RentalSection title="Drop - Off" icon="/mark1.png" />
        </div>
      </div>

      {/* Popular Car Section */}
      <div className="flex flex-wrap items-center py-8">
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start mb-4 sm:mb-0">
          <h2 className="text-[#90A3BF] text-center sm:text-left">Popular Car</h2>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
          <h2 className="text-[#3563E9] text-center sm:text-right">View All</h2>
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {carData.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
  );
}

