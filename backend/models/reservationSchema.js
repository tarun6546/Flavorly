import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [3, "First Name should be atleast 3 characters long"],
        maxLength: [20, "First Name should not exceed 20 characters"],
    },    
    lastName: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [3, "Last Name should be atleast 3 characters long"],
        maxLength: [20, "Last Name should not exceed 20 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Phone is required"],
        minLength: [10, "Phone should be atleast 10 characters long"],
        maxLength: [10, "Phone should not exceed 10 characters"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    date: {
        type: String,
        required: [true, "Date is required"],
    },

});

export const Reservation = mongoose.model("Reservation", reservationSchema);