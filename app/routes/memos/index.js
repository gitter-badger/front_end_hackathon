import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    // session.login() will return a Promise, which will either resolve the
    // current user or reject the promise, which will initialize the transition
    // to the login route
    this.session.login()
    .catch((function(_this) {
      return function() {
       _this.transitionTo('login');
      };
    })(this));
  },

  model: function() {
    return this.store.find('memos');
  }

});
