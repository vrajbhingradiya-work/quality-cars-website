"use client";
import React, { useState } from "react";

// code for generating dyanmic options.
function generateYearOptions() {
  const currentYear = new Date().getFullYear();
  const yearOptions = [];

  for (let year = currentYear; year >= currentYear - 20; year--) {
    yearOptions.push({ title: year.toString(), value: year });
  }

  return yearOptions;
}

const CarForm = ({ carData, setCarData, setDataFilled }: any) => {
  const currentYear = new Date().getFullYear();

  // Options data from your code
  const registrationYearOptions = generateYearOptions();
  const manufacturingYearOptions = generateYearOptions();

  const regStateOptions = ["RJ", "HR", "DL", "GJ", "TN", "MH", "AP", "HP"];
  const seatingCapacityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const doorsOptions = ["1", "2", "3", "4", "5", "6", "7"];
  const driveOptions = ["FWD", "RWD", "AWD"];
  const ownershipOptions = ["1st", "2nd", "3rd"];

  const bodyTypeOptions = [
    { title: "SUV", value: "SUV" },
    { title: "Sedan", value: "SEDAN" },
    { title: "Convertible", value: "CONVERTIBLE" },
    { title: "Coupe", value: "COUPE" },
    { title: "Sports", value: "SPORT" },
    { title: "MUV-MPV", value: "MUV-MPV" },
    { title: "Hatchback", value: "HATCHBACK" },
    { title: "Bike", value: "BIKE" },
  ];

  const brandOptions = [
    { title: "MERCEDES", value: "MERCEDES" },
    { title: "VOLVO", value: "VOLVO" },
    { title: "BMW", value: "BMW" },
    { title: "AUDI", value: "AUDI" },
    { title: "LAND ROVER", value: "LAND ROVER" },
    { title: "FERRARI", value: "FERRARI" },
    { title: "PORSCHE", value: "PORSCHE" },
    { title: "TOYOTA", value: "TOYOTA" },
  ];

  // State to manage form data
  const [newCarData, setNewCarData] = useState(carData);

  // Function to handle dropdown change
  const handleInputChange = (field: any, value: any) => {
    setNewCarData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Function to handle specs change
  const handleSpecsChange = (specField: any, value: any) => {
    setNewCarData((prev: any) => ({
      ...prev,
      specs: {
        ...prev.specs,
        [specField]: value,
      },
    }));
  };
  //  handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newCarData);
    setCarData(newCarData); // Assuming setCarData is updating your state
    setDataFilled(true);
  };

  return (
    <form
      className="p-4 border-2  border-gray-300 rounded-xl  w-full "
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-black dark:text-white">Car Type:</label>
        <select
          required
          title="carType"
          value={newCarData.carType}
          onChange={(e) => {
            handleInputChange("carType", e.target.value);
            if (e.target.value === "SEDAN") {
              handleSpecsChange("doors", "4");
            }
          }}
          className="p-2 border rounded w-full text-black "
        >
          <option value="">Select Car Type</option>
          {bodyTypeOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Brand:</label>
        <select
          required
          title="brand"
          value={newCarData.brand}
          onChange={(e) => handleInputChange("brand", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Brand</option>
          {brandOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Car Model:</label>
        <input
          required
          type="text"
          value={newCarData.carModel}
          onChange={(e) => handleInputChange("carModel", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter car model"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-black dark:text-white">
          Price:
        </label>
        <input
          id="price"
          required
          title="price"
          placeholder="Enter Price"
          type="number"
          className="p-2 border rounded w-full text-black "
          value={newCarData.price}
          onChange={(e) => handleInputChange("price", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">
          Registration Year:
        </label>
        <select
          required
          title="regYear"
          value={newCarData.regYear}
          onChange={(e) => handleInputChange("regYear", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Registration Year</option>
          {registrationYearOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Kms Driven:</label>

        <input
          required
          type="Number"
          value={newCarData.kmsDriven}
          onChange={(e) => handleInputChange("kmsDriven", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter Kms Driven"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">
          Registration State:
        </label>
        <select
          required
          title="regState"
          value={newCarData.regState}
          onChange={(e) => handleInputChange("regState", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Registration State</option>
          {regStateOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Fuel Type:</label>
        <select
          required
          title="fuelType"
          value={newCarData.fuelType}
          onChange={(e) => handleInputChange("fuelType", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Engine:</label>
        <input
          required
          type="text"
          value={newCarData.specs.engine}
          onChange={(e) => handleSpecsChange("engine", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter engine details"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">
          Transmission:
        </label>
        <input
          required
          type="text"
          value={newCarData.specs.transmission}
          onChange={(e) => handleSpecsChange("transmission", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter transmission type"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Ownership:</label>
        <select
          required
          title="ownership"
          value={newCarData.specs.ownership}
          onChange={(e) => handleSpecsChange("ownership", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Ownership</option>
          {ownershipOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Peak Torque:</label>
        <input
          required
          type="text"
          value={newCarData.specs.peakTorque}
          onChange={(e) => handleSpecsChange("peakTorque", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter peak torque"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Peak Power:</label>
        <input
          required
          type="text"
          value={newCarData.specs.peakPower}
          onChange={(e) => handleSpecsChange("peakPower", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter peak power"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Doors:</label>
        <select
          disabled={
            newCarData.carType === "SEDAN" && newCarData.specs.doors === "4"
          }
          required
          title="doors"
          value={newCarData.specs.doors}
          onChange={(e) => handleSpecsChange("doors", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select No of Doors</option>
          {doorsOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">Drive:</label>
        <select
          required
          title="drive"
          value={newCarData.specs.drive}
          onChange={(e) => handleSpecsChange("drive", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Drive Option</option>
          {driveOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">
          Seating Capacity:
        </label>
        <select
          required
          title="seatingCapacity"
          value={newCarData.specs.seatingCapacity}
          onChange={(e) => handleSpecsChange("seatingCapacity", e.target.value)}
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Seating Capacity</option>
          {seatingCapacityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">
          Manufacturing Year:
        </label>
        <select
          required
          title="manufacturingYear"
          value={newCarData.specs.manufacturingYear}
          onChange={(e) =>
            handleSpecsChange("manufacturingYear", e.target.value)
          }
          className="p-2 border rounded w-full text-black"
        >
          <option value="">Select Manufacturing Year</option>
          {manufacturingYearOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white">
          Exterior Color:
        </label>
        <input
          required
          type="text"
          value={newCarData.specs.exteriorColor}
          onChange={(e) => handleSpecsChange("exteriorColor", e.target.value)}
          className="p-2 border rounded w-full text-black"
          placeholder="Enter exterior color"
        />
      </div>

      {/* <div className="mb-4">
        <label className="block text-black dark:text-white">
          Listing Date:
        </label>
        <input
          required
          title="listingDate"
          type="date"
          value={newCarData.listingDate}
          onChange={(e) => handleInputChange("listingDate", e.target.value)}
          className="p-2 border rounded w-full text-black"
        />
      </div> */}
      <div className="flex w-full justify-between p-2">
        <div className="mb-4 flex justify-between items-center gap-4">
          <label className="block text-black dark:text-white">
            Is Car Booked:
          </label>
          <input
            title="isBooked"
            type="checkbox"
            checked={newCarData.isBooked}
            onChange={(e) => handleInputChange("isBooked", e.target.checked)}
            className="p-2"
          />
        </div>

        <div className="mb-4 flex justify-between items-center gap-4 ">
          <label className="block text-black dark:text-white">
            Is Car Sold:
          </label>
          <input
            title="isSold"
            type="checkbox"
            checked={newCarData.isSold}
            onChange={(e) => handleInputChange("isSold", e.target.checked)}
            className="p-2"
          />
        </div>

        <div className="mb-4 flex justify-between items-center gap-4 ">
          <label className="block text-black dark:text-white">
            Is Car New:
          </label>
          <input
            title="isCarNew"
            type="checkbox"
            checked={newCarData.isCarNew}
            onChange={(e) => handleInputChange("isCarNew", e.target.checked)}
            className="p-2"
          />
        </div>
      </div>

      {newCarData.isCarNew && (
        <div className="mb-4 flex justify-between items-center gap-4 ">
          <label className="block text-black dark:text-white">Sold To:</label>
          <input
            type="text"
            value={newCarData.soldTo}
            onChange={(e) => handleInputChange("soldTo", e.target.value)}
            className="p-2 border rounded w-full text-black"
            placeholder="Enter buyer name"
          />
        </div>
      )}

      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Proceed
      </button>
    </form>
  );
};

export default CarForm;
