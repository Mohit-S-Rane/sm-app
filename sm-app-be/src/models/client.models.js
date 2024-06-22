import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const clientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true,
        lowercase: true
    },
    role: {
        type: String,
        default: ["CLIENT"]
    },
    emailId: {
        type: String,
        required: true,
        lowercase: true
    },
    mobileNo: {
        type: String,
        required: true,
    },
    address: {
        type: String
    },
    subStartDate: {
        type: String,
        required: true,
    },
    subEndDate: {
        type: String,
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

clientSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

clientSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const Client = mongoose.model("Client", clientSchema)