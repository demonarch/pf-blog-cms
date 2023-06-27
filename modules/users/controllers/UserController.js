
// '/home/kian/Documents/pf-blog-cms/modules/users/controllers/cUsersController.js'

import { Controller } from "pulseflow"
import UserModel from '../models/UserModel.js';
/**
 * @Route (path="/users")
 */
export default class UserController extends Controller {

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
    const user = await UserModel.findById(id).lean(true);
    if (!user) {
        return next();
    }

    delete user.password;
    if (!req.user || (![`ADMIN`, `SUPER_ADMIN`].includes(req.user.role) && req.user._id != id)) {
        delete user.email;
        delete user.role;
    }

    res.json({message: `User found`, user});
  }



    /**
   * @Route (path="/update", method=POST, roles=[])
   * @param req
   * @param res
   * @return {Promise<void>}
   */
    static async update(req, res, next) {
        const {id} = req.params;
        if (!req.user || (![`ADMIN`, `SUPER_ADMIN`].includes(req.user.role) && req.user._id != id)) {
            return res.status(403).json({message: `Permission denied`});
        }
        if (!id || !mongoose.isValidObjectId(id)) {
            return next();
        }
        const user = await User.findById(id);
        if (!user) {
            return next();
        }

        const {body} = req;
        const {name, email, password} = body;
        user.name = name;
        user.email = email;
        user.password = password;

        const error = user.validateSync();
        if (error) {
            res.status(400).json({message: `Error validating user`, errors: error.errors});
        }
        try {
            await user.save();
            res.status(200).json({message: `User updated`, user});
        } catch (e) {
            res.status(500).json({message: `Error updating user`, errors: e});
        }
    }

}

