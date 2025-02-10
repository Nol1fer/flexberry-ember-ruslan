import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  router: service(),

  actions: {
    async saveBook(e) {
      e.preventDefault();

      await this.get('dataService').createBook({
        title: this.get('title'),
        author: this.get('author'),
        description: this.get('description'),
        cover: this.get('cover'),
        pages: parseInt(this.get('pages')),
        rating: parseInt(this.get('rating')),
        tags: this.get('tags').split(','),
      });

      this.get('router').transitionTo('books');
    }
  }
});
