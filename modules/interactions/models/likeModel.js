
// '/home/kian/Documents/pf-blog-cms/modules/interactions/models/likeModel.js'

import { Model } from "pulseflow"

export default class likeModel extends Model {

  constructor(attrbutes) {
    super(attrbutes);
  }

  get post_id() {
    return this('post_id');
  }

  set post_id(value) {
    this.set('post_id', value);
  }

  get liker() {
    return this.get('liker');
  }

  set liker() {
    this.set('liker', value);
  }
}

