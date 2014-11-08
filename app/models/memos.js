import DS from 'ember-data';

var Memos = DS.Model.extend({
  body: DS.attr('string'),
  date: DS.attr('string'),
  contact: DS.belongsTo('contacts', { async: true })
});

Memos.reopenClass({
  FIXTURES: [
    { id: 1, body: 'This is a memo',       contact: 1},
    { id: 2, body: 'This is another memo', contact: 1},
    { id: 3, body: 'This is a third memo', contact: 1}
  ]
});

export default Memos;
