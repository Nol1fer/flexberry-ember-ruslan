import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: { refreshModel: true }
  },
  dataService: service('data'),

  model({ search }) {
    return new Promise((resolve, reject) => {
      later(async () => {
        try {
          let books = search ? await this.get('dataService').getBooks(search) : await this.get('dataService').getBooks();
          resolve(books);
        } catch (error) {
          reject('Connection failed');
        }
      }, 100);
    });
  },

  actions: {
    loading(transition, originRoute) {
      return false;
    }
  }
});
