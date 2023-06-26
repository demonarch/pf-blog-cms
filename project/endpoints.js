import UserController from '../modules/users/controllers/UserController.js';
import PostController from '../modules/posts/controllers/PostController.js';
import PageController from '../modules/pages/controllers/PageController.js';
import cBlocksController from '../modules/blocks/controllers/cBlocksController.js';
import rBlocksController from '../modules/blocks/controllers/rBlocksController.js';
import uBlocksController from '../modules/blocks/controllers/uBlocksController.js';
import dBlocksController from '../modules/blocks/controllers/dBlocksController.js';
import cCommentController from '../modules/interactions/controllers/cCommentController.js';
import rCommentController from '../modules/interactions/controllers/rCommentController.js';
import uCommentController from '../modules/interactions/controllers/uCommentController.js';
import dCommentController from '../modules/interactions/controllers/dCommentController.js';
import likeController from '../modules/interactions/controllers/likeController.js';
import dislikeController from '../modules/interactions/controllers/dislikeController.js';
import cMediaController from '../modules/media/controllers/cMediaController.js';
import rMediaController from '../modules/media/controllers/rMediaController.js';
import uMediaController from '../modules/media/controllers/uMediaController.js';
import dMediaController from '../modules/media/controllers/dMediaController.js';
export default (router) => {
	router.post("/users/create",  requestHandler(UserController, UserController.create, []))
	router.get("/users/read",  requestHandler(UserController, UserController.read, []))
	router.post("/users/update",  requestHandler(UserController, UserController.update, []))

	router.post("/posts/create",  requestHandler(PostController, PostController.create, []))
	router.get("/posts/read",  requestHandler(PostController, PostController.read, []))
	router.get("/posts/update",  requestHandler(PostController, PostController.update, []))



	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))




	return router
}