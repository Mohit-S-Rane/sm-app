import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    role: {
        type: String,
        default: ["CLIENT"]
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
    address: {
        type: String
    },
    subStartDate: {
        type: Date,
        required: true,
    },
    subEndDate: {
        type: Date,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

export const Client = mongoose.model("Client", clientSchema)