
// '/home/kian/Documents/pf-blog-cms/modules/posts/controllers/PostController.js'

import { Controller } from "pulseflow"

/**
 * @Route (path="/posts")
 */
export default class PostController extends Controller {

    /**
   * @Route (path="/create", method=POST, roles=[])
   * @param req
   * @param res
   * @return {Promise<void>}
   */
  static async create(req, res, next) {
    if (!req.user) {
        return res.status(401).json({message: `Unauthorized`});
    }
    const {body} = req;
    const {title, content} = body;
    const post = new Post({title, content, author: req.user._id});
    const error = post.validateSync();
    if (error) {
        res.status(400).json({message: `Error validating post`, errors: error.errors});
    }
    try {
        await post.save();
        res.status(201).json({message: `Post created`, post});
    } catch (e) {
        res.status(500).json({message: `Error creating post`, errors: e});
    }
  }


    /**
   * @Route (path="/read", method=GET, roles=[])
   * @param req
   * @param res
   * @return {Promise<void>}
   */

  static async read(req, res, next) {
    const {id} = req.params;
    if (!id || !mongoose.isValidObjectId(id)) {
        return next();
    }
    /** @type {Post & mongoose.Document} */
    const post = await Post.findById(id);
    if (!post) {
        return next();
    }
    if (post.status != 'PUBLISHED' && (!req.user || (![`ADMIN`, `SUPER_ADMIN`].includes(req.user.role) && req.user._id != post.author))) {
        return res.status(403).json({message: `Permission denied`});
    }
    res.json({message: `Post found`, post});
  }



    /**
   * @Route (path="/update", method=GET, roles=[])
   * @param req
   * @param res
   * @return {Promise<void>}
   */

  static async update(req, res, next) {
    if (!req.user) {
        return res.status(401).json({message: `Unauthorized`});
    }
    const {id} = req.params;
    if (!id || !mongoose.isValidObjectId(id)) {
        return next();
    }
    /** @type {Post & mongoose.Document} */
    const post = await Post.findById(id);
    if (!post) {
        return next();
    }
    if (![`ADMIN`, `SUPER_ADMIN`].includes(req.user.role) && req.user._id != post.author) {
        return res.status(403).json({message: `Permission denied`});
    }

    if (post.status != 'DRAFT') {
        return res.status(400).json({message: `Post already published`});
    }

    const {body} = req;
    const {title, content} = body;
    post.title = title;
    post.content = content;

    const error = post.validateSync();
    if (error) {
        res.status(400).json({message: `Error validating post`, errors: error.errors});
    }
    try {
        await post.save();
        res.status(200).json({message: `Post updated`, post});
    } catch (e) {
        res.status(500).json({message: `Error updating post`, errors: e});
    }
  }
}

