import dBlocksController from "dBlocksController.js"

import {requestHandler} from "./handler.js";

export default (router) => {
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	return router
}