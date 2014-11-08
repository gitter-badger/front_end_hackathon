angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
})
.factory('Memos', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var memos = [
    { id: 0, name: 'This is a memo' },
    { id: 1, name: 'This is another memo' }
  ];

  return {
    all: function() {
      return memos;
    },
    get: function(memoID) {
      // Simple index lookup
      return memos[memoID];
    }
  }
});
