import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function() {
      var name = this.get('name');
      var phone = this.get('phone');

      var contact = this.store.createRecord('contacts', {
        name: name,
        phone: phone
      });

      contact.save().then((function(_this) {
        return function() {
          _this.set('name', null);
          _this.set('phone', null);
          _this.transitionToRoute('add');
        };
      })(this));
    }
  }

});
