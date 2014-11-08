import Ember from 'ember';

export default Ember.Controller.extend({

  contacts: function() {
    return this.store.find('contacts');
  }.property(),


  actions: {
  
    save: function() {
      var contact = this.get('contact');
      contact     = parseInt(contact);
      var date    = this.get('date');
      var body    = this.get('body');

      debugger;

      var memo = this.store.createRecord('memos', {
        timeStamp: date,
        body: body,
        contact: this.store.find('contacts', contact)
      });

      memo.save().then((function(_this) {
        return function() {
          _this.set('contact', null);
          _this.set('date', null);
          _this.set('body', null);
          _this.transitionToRoute('memos.index');
        };
      })(this));
    
    }
  
  }

});
