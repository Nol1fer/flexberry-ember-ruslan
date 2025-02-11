import Service from '@ember/service';
import ENV from 'flexberry-ember-ruslan/config/environment';
import { A } from "@ember/array";

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('books', A());
  },

  async getBooks() {
    // return await fetch(`${ENV.backendURL}/books`).then((r) => r.json());

    let response = await fetch(`${ENV.backendURL}/books`);
    let books = await response.json();
    this.get('books').clear();
    this.get('books').pushObjects(books);
    return this.get('books');
  },

  getBook(id) {
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
    // return this.get('books').find((book) => book.id === parseInt(id));
  },

  deleteBook(book) {
    this.get('books').removeObject(book);
    return fetch(`${ENV.backendURL}/books/${book.id}`, { method: 'DELETE' });
  },

  createBook(book) {
    return fetch(`${ENV.backendURL}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
  },

  updateBook(book) {
    return fetch(`${ENV.backendURL}/books/${book.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
  }

});
