import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    login: function() {
      var name = this.get('name');
      var phone = this.get('phone');
      var password = this.get('password');

      // Make a new promise that posts the user credentials to the endpoint and
      // resolve whatever is returned (which should be the session ID
      // Ember.RSVP.resolve(Ember.$.post('http://localhost:3000/users/', {
      //   user: {
      //     name: name,
      //     phone_number: phone,
      //     passowrd: password
      //   }
      // }))
      Ember.RSVP.resolve({
        session_id: 1
      })
      // Take the session ID and set it in localStorage, then run the login()
      // method that's part of the login service.  Yay for reusing code!
      .then((function(_this) {
        return function(data) {
          localStorage['accessToken'] = data.session_id;
          _this.session.login();
        };
      })(this))
      .then((function(_this) {
        return function() {
          _this.set('name', null);
          _this.set('phone', null);
          _this.set('password', null);
          _this.transitionToRoute('memos.index');
        };
      })(this))
      .catch(function(error) {
        throw error;
      });
    }
  }

});
