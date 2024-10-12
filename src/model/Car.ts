import mongoose, { Schema, Document } from "mongoose";

export interface Car extends Document {
  id: string;
  carType: string;
  brand: string;
  carModel: string;
  price: number;
  regYear: number;
  kmsDriven: number;
  regState: string;
  fuelType: string;
  listingDate: Date;
  images: string[]; // Array of strings
  specs: {
    engine: string;
    transmission: string;
    ownership: string;
    peakTorque: string;
    peakPower: string;
    doors: string;
    drive: string;
    seatingCapacity: string;
    manufacturingYear: number;
    exteriorColor: string;
  };
  isBooked: boolean;
  isSold: boolean;
  isCarNew: boolean;
  soldTo: string;
}

const CarSchema: Schema<Car> = new Schema({
  id: { type: String, required: true },
  carType: { type: String, required: true },
  brand: { type: String, required: true },
  carModel: { type: String, required: true },
  price: { type: Number, required: true },
  regYear: { type: Number, required: true },
  kmsDriven: { type: Number, required: true },
  regState: { type: String, required: true },
  fuelType: { type: String, required: true },
  listingDate: { type: Date, default: new Date() },
  images: { type: [String], default: [] }, // Array of strings
  specs: {
    engine: { type: String, default: null },
    transmission: { type: String, default: null },
    ownership: { type: String, default: null },
    peakTorque: { type: String, default: null },
    peakPower: { type: String, default: null },
    doors: { type: String, default: null },
    drive: { type: String, default: null },
    seatingCapacity: { type: String, default: null },
    manufacturingYear: { type: Number, default: null },
    exteriorColor: { type: String, default: null },
  },
  isBooked: { type: Boolean, required: true, default: false },
  isSold: { type: Boolean, required: true, default: false },
  isCarNew: { type: Boolean, required: true, default: false },
  soldTo: { type: String, default: null },
});

const CarModel =
  (mongoose.models.Car as mongoose.Model<Car>) ||
  mongoose.model<Car>("Car", CarSchema);

export default CarModel;
