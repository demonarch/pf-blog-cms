
// '/home/kian/Documents/pf-blog-cms/modules/media/models/mediaModel.js'

import { Model } from "pulseflow"

export default class mediaModel extends Model {
  constructor(attributes) {
    super(attributes);
  }

  get media_id() {
    return.get('media_id');
  }

  get publisher() {
    return this.get('publisher');
  }

  set publisher(value) {
    this.set('publisher', value);
  }

  get media_type() {
    return this.get('media_type');
  }

  set media_type(value) {
    this.set('media_type', value);
  }

  get media_path() {
    return this.get('media_path');
  }

  set media_path(value) {
    this.set('media_path', value);
  }
}

