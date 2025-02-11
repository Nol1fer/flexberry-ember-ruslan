import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
// import { set } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),
  router: service(),

  actions: {
    async saveBook(book) {
      // console.log(book);

      // // if tags was untouched conver it to string
      // if (Array.isArray(book.tags)) {
      //   console.log(book.tags);
      //   // book.tags = book.tags.join(',');
      //   set(book, 'tags', book.tags.join(','));
      //   console.log(book.tags);

      // }

      await this.get('dataService').updateBook({
        id: book.id,
        title: book.title,
        author: book.author,
        description: book.description,
        cover: book.cover,
        pages: parseInt(book.pages),
        rating: parseInt(book.rating),
        tags: Array.isArray(book.tags) ? book.tags : book.tags.split(',')
      });

      this.get('router').transitionTo('books');
    }
  }
});
