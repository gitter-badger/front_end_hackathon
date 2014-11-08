import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    delete: function() {
      var memo = this.get('content');
      memo.destroyRecord().then((function(_this) {
        return function() {
          _this.transitionToRoute('memos.index');
        };
      })(this));
    }
  }

});
