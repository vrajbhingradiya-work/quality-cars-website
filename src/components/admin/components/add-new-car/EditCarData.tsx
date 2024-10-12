"use client";
import React, { useEffect, useState } from "react";
import ImageInputWithCompressionAndUpload from "../../ui/input-image-upload/ImageInputWithCompressionAndUpload";
import CarForm from "./CarForm";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { fetchCars } from "@/lib/store/carSlice";
function EditCarData({
  id,
  initalCarData = {
    id: "1",
    carType: "",
    brand: "",
    carModel: "",
    price: 0,
    regYear: 0,
    kmsDriven: 0,
    regState: "",
    fuelType: "",
    listingDate: new Date(),
    images: [], // Array of image's object link,
    specs: {
      engine: "",
      transmission: "",
      ownership: "",
      peakTorque: "",
      peakPower: "",
      doors: "",
      drive: "",
      seatingCapacity: "",
      manufacturingYear: 0,
      exteriorColor: "",
    },
    isBooked: false,
    isSold: false,
    isCarNew: false,
    soldTo: "",
  },
}: any) {
  //01 add form for input of data. especially cars - that's going to be time taking.
  //02 add imageInput --- done
  // 03 functionality for setting data to database. --done
  //04 functionality to set one image for thumbnail profile image

  const [dataFilled, setDataFilled] = useState(false);

  const [carData, setCarData] = useState(initalCarData);
  const router = useRouter();
  const cars = useAppSelector((state) => state.car.cars);
  const dispatch = useAppDispatch();
  const [newId, setNewId] = useState("1");

  // final uploadCarData function
  const uploadCarData = async () => {
    // write logic for updating database.
    try {
      const response = await fetch("/api/add-new-car", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(carData),
      });

      if (!response.ok) {
        alert("failed to upload car.");
        setDataFilled(false);
        router.push("/admin/add-new-car");
        throw new Error(`Failed to upload car data: ${response.statusText}`);
      }

      // Parse the JSON response from the server
      const result = await response.json();
      console.log("Car data uploaded successfully:", result);
      alert("Car data uploaded successfully");
      dispatch(fetchCars());
      setCarData(initalCarData);
      setDataFilled(false);
    } catch (error) {
      console.error("Error uploading car data:", error);
    }
  };

  useEffect(() => {
    if (carData.images.length !== 0) {
      console.log("Images updated, rendering button.");
    }
  }, [carData.images]);
  // new id logic
  useEffect(() => {
    console.log(cars);
    if (carData.id === "1") {
      const id = cars[cars.length - 1]?.id;
      const newCarId = String(Number(id) + 1);
      setCarData({ ...carData, id: newCarId });
    }
  }, [cars, carData]);
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-[50%]">
      {!dataFilled && (
        <CarForm
          carData={carData}
          setCarData={setCarData}
          setDataFilled={setDataFilled}
        />
      )}
      {/* to do : 
      if all inputs are recieved then we proceed for database updation. with a update Inventory or addNew Car button*/}
      {dataFilled && (
        <ImageInputWithCompressionAndUpload
          imageSize={4}
          setPropData={setCarData}
          propData={carData}
        />
      )}

      {carData.images.length !== 0 && (
        <button
          onClick={uploadCarData}
          className={`mt-4 p-2  ${
            carData.images.length !== 0 ? "bg-blue-500" : "bg-blue-900"
          } text-white rounded`}
        >
          {new Date(carData.listingDate).getTime() ===
          new Date().setHours(0, 0, 0, 0)
            ? "Add New Car"
            : "Update Car Data"}
        </button>
      )}
    </div>
  );
}

export default EditCarData;
