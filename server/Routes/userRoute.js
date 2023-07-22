import { Router } from "express";
import { EditUserController, deleteUserController, getUserController, postUserController, updateUserController } from "../Controllers/userController.js";
const route=Router();

route.get("/user",getUserController);

route.post("/user",postUserController)

route.delete("/user/:id",deleteUserController)

route.put("/user/:id",EditUserController);

route.get("/user/:id",updateUserController)



export default route