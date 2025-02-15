import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('cover', '');
    this.get('book').set('title', '');
    this.get('book').set('author', '');
    this.get('book').set('description', '');
    this.get('book').set('pages', 0);
    this.get('book').set('rating', 0);
    this.get('book').set('tags', []);
  },

  dataService: service('data'),
  router: service(),

  actions: {
    async saveBook(book) {
      // console.log(book);

      await this.get('dataService').createBook({
        title: book.title,
        author: book.author,
        description: book.description,
        cover: book.cover,
        pages: parseInt(book.pages),
        rating: parseInt(book.rating),
        tags: book.tags,
      });

      this.get('router').transitionTo('books');
    }
  }
});
