import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    role: {
        type: String,
        default: ["CUSTOMER"]
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true,
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client"
    }

}, {timestamps: true})

export const Customer = mongoose.model("Customer", customerSchema)