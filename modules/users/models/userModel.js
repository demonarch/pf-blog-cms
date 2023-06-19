
// '/home/kian/Documents/pf-blog-cms/modules/users/models/userModel.js'

import { Model } from "pulseflow"

export default class userModel extends Model {
  constructor(attributes = {}) {
    super(attributes);
  }

  get name() {
    return this.get('name');
  }

  set name(value) {
    this.set('name', value);
  }

  get age() {
    return this.get('age');
  }

  set age(value) {
    this.set('age', value);
  }

  get email() {
    return this.get('email');
  }

  set email(value) {
    this.set('email', value);
  }

  // Additional methods specific to the UserModel can be defined here
}