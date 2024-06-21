import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    name: {
        type: String,
    },
    role: {
        type: String,
        enum: ["ADMIN", "SUPERUSER"],
        default: ["SUPERUSER"]
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }

}, {timestamps: true})

export const User = mongoose.model("User", userSchema)