
// '/home/kian/Documents/pf-blog-cms/modules/pages/models/pageModel.js'

import { Model } from "pulseflow"

export default class pageModel extends Model {
  constructor(attributes = {}) {
    super(attributes);
  }

  get id() {
    return this.get('id');
  }

  get author() {
    return this.get('author');
  }

  set author(value) {
    this.set('author', value);
  }

  get category() {
    return this.get('category');
  }

  set category(value) {
    this.set('category', value);
  }

  get blocks() {
    return this.get('blocks');
  }

  set blocks(value) {
    this.set('blocks', value);
  }
}

