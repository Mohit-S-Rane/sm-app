import { Router } from "express"
import { registerClient, updateClientDetails, removeClient, getAllClient, clientLogin } from "../controllers/client.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router()
router.route("/").get(verifyJWT, getAllClient)
router.route("/login").get(verifyJWT, clientLogin)
router.route("/register").post(verifyJWT, registerClient)

router.route("/update").patch(verifyJWT, updateClientDetails)
router.route("/remove/:id").delete(verifyJWT, removeClient)


export default router