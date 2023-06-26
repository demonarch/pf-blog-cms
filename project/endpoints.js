import UserController from '../modules/users/controllers/UserController.js';
import cPostsController from '../modules/posts/controllers/cPostsController.js';
import rPostsController from '../modules/posts/controllers/rPostsController.js';
import uPostsController from '../modules/posts/controllers/uPostsController.js';
import dPostsController from '../modules/posts/controllers/dPostsController.js';
import cPagesController from '../modules/pages/controllers/cPagesController.js';
import rPagesController from '../modules/pages/controllers/rPagesController.js';
import uPagesController from '../modules/pages/controllers/uPagesController.js';
import dPagesController from '../modules/pages/controllers/dPagesController.js';
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





	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))
	router.get("/test/get-orders",  requestHandler(dBlocksController, dBlocksController.test, []))




	return router
}