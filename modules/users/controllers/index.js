import UserController from "UserController.js"

import {requestHandler} from "./handler.js";

export default (router) => {
	router.post("/users/create",  requestHandler(UserController, UserController.create, []))
	router.get("/users/read",  requestHandler(UserController, UserController.read, []))
	router.post("/users/update",  requestHandler(UserController, UserController.update, []))
	return router
}