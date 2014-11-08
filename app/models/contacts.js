import DS from 'ember-data';

var Contacts = DS.Model.extend({
  name: DS.attr('string')
});

Contacts.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Alex LaFroscia' }
  ]
});

export default Contacts;
