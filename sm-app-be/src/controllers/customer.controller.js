import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Customer } from "../models/customer.models.js";


const registerCustomer = asyncHandler(async (req, res)=>{
    const { customerName, role, emailId, mobileNo, country,  state, city, password } = req.body

    let existedCustomer = await Customer.findOne({
        $or: [{ emailId }, { mobileNo }]
    })

    existedCustomer = await Customer.findOne({
        $or: [{ emailId }, { mobileNo }]
    })

    if (existedCustomer) {
        throw new ApiError(409, "Customer with email or mobile no is already exist")
    }

    const customer = await Customer.create({
        customerName,
        role: "CUSTOMER",
        emailId: emailId.toLowerCase(),
        mobileNo,
        country,
        state,
        city,
        password,
        createdBy: req.user._id
    })

    const createdCustomer = await Customer.findById(customer._id).select("-password")

    if (!createdCustomer) {
        throw new ApiError(500, "Something went wrong while reqgistering customer")
    }

    return res.status(201).json(
        new ApiResponse(200, createdCustomer, "customer registered successfully")
    )
})

const updateCustomerDetails = asyncHandler(async (req, res)=>{
    const { customerName, role, emailId, mobileNo, country,  state, city, password } = req.body

    const customer = await Customer.findOne({emailId})

    const updatedCustomer = {
        customerName,
        role,
        // emailId: emailId.toLowerCase(),
        mobileNo,
        country,
        state,
        city,
        createdBy: req.user._id
    }

    customer.customerName = updatedCustomer.customerName
    customer.role = updatedCustomer.role
    customer.country = updatedCustomer.country
    customer.state = updatedCustomer.state
    customer.city = updatedCustomer.city

    await customer.save({ validateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "customer details change successfully"))
})

const removeCustomer = asyncHandler(async (req, res)=>{
    console.log(req.params);

    const emailId = req.params.id
    // console.log(emailId);
    const getCustomer = await Customer.findOne({emailId})
    const result = await Customer.findByIdAndDelete(getCustomer._id);

    return res
    .status(200)
    .json(new ApiResponse(200, {}, "remove customer successfully"))
})

const getAllCustomer = asyncHandler(async (req, res)=>{
    const allCustomer = await Customer.find({}) 
    
    return res
    .status(200)
    .json(new ApiResponse(200, allCustomer, "fetch customer successfully"))
})

export { registerCustomer, updateCustomerDetails, removeCustomer, getAllCustomer }