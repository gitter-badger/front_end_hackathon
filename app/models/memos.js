import DS from 'ember-data';

var Memos = DS.Model.extend({
  body: DS.attr('string')
});

Memos.reopenClass({
  FIXTURES: [
    { id: 1, body: 'This is a memo'},
    { id: 2, body: 'This is another memo'},
    { id: 3, body: 'This is a third memo'}
  ]
});

export default Memos;
