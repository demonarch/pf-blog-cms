
// '/home/kian/Documents/pf-blog-cms/modules/interactions/models/commentModel.js'

import { Model } from "pulseflow"

export default class commentModel extends Model {
  constructor(attributes) {
    super(attributes);
  }

  get post_id() {
    return this.get('post_id');
  }

  set post_id(value) {
    this.set('post_id', value);
  }

  get commenter() {
    return this.get('commenter');
  }

  set commenter(value) {
    this.set('commenter', value);
  }
}

