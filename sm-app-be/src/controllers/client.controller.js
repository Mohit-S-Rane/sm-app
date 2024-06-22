import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.models.js";
import { Client } from "../models/client.models.js"

const registerClient = asyncHandler(async (req, res) => {
    const { clientName, role, emailId, mobileNo, address, subStartDate, subEndDate, password } = req.body

    let existedClient = await User.findOne({
        $or: [{ emailId }, { mobileNo }]
    })

    existedClient = await Client.findOne({
        $or: [{ emailId }, { mobileNo }]
    })

    if (existedClient) {
        throw new ApiError(409, "Client with email or mobile no is already exist")
    }

    const client = await Client.create({
        clientName,
        role: "CLIENT",
        emailId: emailId.toLowerCase(),
        mobileNo,
        address,
        subStartDate,
        subEndDate,
        password,
        createdBy: req.user._id
    })

    const createdClient = await Client.findById(client._id).select("-password")

    if (!createdClient) {
        throw new ApiError(500, "Something went wrong while reqgistering client")
    }

    return res.status(201).json(
        new ApiResponse(200, createdClient, "Client registered successfully")
    )
})

const updateClientDetails = asyncHandler(async (req, res) => {
    const { clientName, role, emailId, mobileNo, address, subStartDate, subEndDate, password } = req.body

    const client = await Client.findOne({ emailId })

    const updatedClient = {
        clientName,
        role,
        // emailId: emailId.toLowerCase(),
        mobileNo,
        address,
        subStartDate,
        subEndDate,
        // password
    }

    client.clientName = updatedClient.clientName
    client.role = updatedClient.role
    client.address = updatedClient.address
    client.subStartDate = updatedClient.subStartDate
    client.subEndDate = updatedClient.subEndDate

    await client.save({ validateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "client details change successfully"))

})

const removeClient = asyncHandler(async (req, res) => {
    console.log(req.params);

    const emailId = req.params.id
    // console.log(emailId);
    const getClient = await Client.findOne({ emailId })
    console.log(emailId);
    const clientId = getClient._id
    const result = await Client.findByIdAndDelete(clientId);

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "remove client successfully"))
})

const getAllClient = asyncHandler(async (req, res) => {
    const allClient = await Client.find({})

    return res
        .status(200)
        .json(new ApiResponse(200, allClient, "fetch client successfully"))
})

const clientLogin = asyncHandler(async (req, res) => {
    const { emailId, password } = req.body
    const existedClient = await Client.findOne({
        $and: [{ emailId }, { password }]
    })

    if (existedClient) {
        throw new ApiError(409, "Client with email or mobile no is already exist")
    }

    const subEndDate = Date.parse(existedClient.subEndDate);
    const todaydate = Date.parse(Date.now());

    // console.log(d1);
    // console.log(d2);

    if (subEndDate > todaydate) {
        res.json({ message: 'Login successful', todaydate });
    } else {
        res.status(403).json({ message: 'Subscription expired' });
    }
})

export { registerClient, updateClientDetails, removeClient, getAllClient, clientLogin }