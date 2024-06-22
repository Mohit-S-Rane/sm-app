import { Router } from "express"
import { registerClient, updateClientDetails, removeClient } from "../controllers/client.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()
router.route("/register").post(verifyJWT, registerClient)

router.route("/update").patch(verifyJWT, updateClientDetails)
router.route("/remove").delete(verifyJWT, removeClient)


export default router