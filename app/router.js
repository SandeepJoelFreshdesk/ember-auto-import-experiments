import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('grid-1');
  this.route('grid-2');
  this.route('home');
  this.route('charts-1');
  this.route('charts-2');
});

export default Router;
