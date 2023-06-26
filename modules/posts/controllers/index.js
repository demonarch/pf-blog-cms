import PostController from "PostController.js"

import {requestHandler} from "./handler.js";

export default (router) => {
	router.post("/posts/create",  requestHandler(PostController, PostController.create, []))
	router.get("/posts/read",  requestHandler(PostController, PostController.read, []))
	router.get("/posts/update",  requestHandler(PostController, PostController.update, []))
	return router
}