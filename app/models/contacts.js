import DS from 'ember-data';

var Contacts = DS.Model.extend({
  name: DS.attr('string'),
  memo: DS.belongsTo('memos', {async: true})
});

Contacts.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Alex LaFroscia' }
  ]
});

export default Contacts;
