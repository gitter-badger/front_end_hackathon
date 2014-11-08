import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('memos',    { path: '/' }, function() {
    this.route('memo',      { path: 'memo/:memo_id' });
  });
  this.route('add',         { path: 'add' });
  this.route('settings',    { path: 'settings' });
  this.route('login',       { path: 'login' });
});

export default Router;
