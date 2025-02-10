import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  dataService: service('data'),
  router: service(),

  actions: {
    async deleteBook(book) {
      try {
        await this.get('dataService').deleteBook(book);
        // this.transitionToRoute('books.index');

      } catch (error) {
        this.get('router').transitionTo('error', { error: 'Connection failed' });
        // this.send('error', new Error('Connection failed'));
      }
    }
  }
});
