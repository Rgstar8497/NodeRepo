import e from "express";
import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
    email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }});
const Student = mongoose.model("Student", studentSchema);   
export default Student;