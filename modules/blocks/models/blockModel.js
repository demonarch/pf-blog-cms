
// '/home/kian/Documents/pf-blog-cms/modules/blocks/models/blockModel.js'

import { Model } from "pulseflow"

export default class blockModel extends Model {
  
  constructor(attributes) {
    super(attributes);
  }

  get id() {
    return this.get('id');
  }


  get title() {
    return this.get('title');
  }

  set title(value) {
    this.set('title', value);
  }
  get class() {
    return this.get('class');
  }

  set class(value) {
    this.set('class', value);
  }

  get code() {
    return this.get('code');
  }

  set code() {
    this.set('code', value);
  }
}

