import { Router } from "express"
import { registerCustomer, updateCustomerDetails, removeCustomer } from "../controllers/customer.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()
router.route("/register").post(verifyJWT, registerCustomer)

router.route("/update").patch(verifyJWT, updateCustomerDetails)
router.route("/remove").delete(verifyJWT, removeCustomer)


export default router