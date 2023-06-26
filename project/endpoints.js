import UserController from '../modules/users/controllers/UserController.js';
import PostController from '../modules/posts/controllers/PostController.js';
import PageController from '../modules/pages/controllers/PageController.js';
export default (router) => {
	router.post("/users/create",  requestHandler(UserController, UserController.create, []))
	router.get("/users/read",  requestHandler(UserController, UserController.read, []))
	router.post("/users/update",  requestHandler(UserController, UserController.update, []))

	router.post("/posts/create",  requestHandler(PostController, PostController.create, []))
	router.get("/posts/read",  requestHandler(PostController, PostController.read, []))
	router.get("/posts/update",  requestHandler(PostController, PostController.update, []))


	return router
}