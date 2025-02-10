import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('meetings');
  this.route('speakers');
  this.route('books', function () { });
  this.route('error', { path: '/:error' });
  this.route('404', { path: '*path' });
  this.route('edit-book', { path: '/edit-book/:id' });
  this.route('create-book');
});

export default Router;
