import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit(this.get('book'));
    },
    changeTags(newTags) {
      set(this.get('book'), 'tags', [...newTags]);
    }
  }
});
