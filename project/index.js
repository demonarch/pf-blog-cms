import dBlocksController from "../modules/blocks/controllers/dBlocksController.js"

import {requestHandler} from "./handler.js";

export default (router) => {
	router.get("/test/test",  requestHandler(dBlocksController, dBlocksController.test, []))
	return router
}