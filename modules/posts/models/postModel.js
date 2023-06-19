
// '/home/kian/Documents/pf-blog-cms/modules/posts/models/postModel.js'

import { Model } from "pulseflow"

export default class postModel extends Model {
  constructor(attributes = {}) {
    super(attributes);
  }

  get author() {
    return this.get('author');
  }

  set author(value) {
    this.set('author', value);
  }


  get id() {
    return this.get('id');
  }

  get content() {
    return this.get('content');
  }

  set content(value) {
    this.set('content', value);
  }
}

