import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('memos');
  },

  actions: {
    addTask: function() {
      this.transitionTo('add');
    }
  }

});
