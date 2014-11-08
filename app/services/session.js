import Ember from 'ember';

export default Ember.Object.extend({

  baseURL: 'http://localhost:3000',

  user: null,

  login: function() {
    // make a variable to represent the access token
    var token = localStorage['accessToken'];
    // If the token doesn't exist, reject the promise, which the Route
    // will interpret as the need to go to login
    if (Ember.isEmpty(token)) {
      return Ember.RSVP.reject();
    } else {
      return Ember.RSVP.resolve({ id: 1, name: 'Alex LaFroscia' });
    }

    // // Return a promise that tries to authenticate the session
    // return Ember.RSVP.resolve(Ember.$.getJSON( this.get('baseURL') + '/sessions/' + token))
    // .then(function(data) {
    //   // If it was successful, the promise will resolve to the returned JSON of
    //   // the request, meaning that we now have access to that object as `data`
    //   //
    //   // We now return another Promise from here that tried to get the user data
    //   return Ember.$.getJSON( this.get('baseURL') + '/users/' + data.user.user_id);
    // })
    // .then(function(data) {
    //   var user = {
    //     name: data.user.name,
    //   };
    //   return user;
    // });

  }

});
