import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    var user = this.session.get('user');
    if (user != null) {
      this.transitionTo('memos.index');
    }
  }

});
