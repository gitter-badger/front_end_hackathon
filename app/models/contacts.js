import DS from 'ember-data';

var Contacts = DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string')
});

Contacts.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Alex LaFroscia',   phone: '631-365-4582' },
    { id: 2, name: 'Robbie McKinstry', phone: '412-445-3171' }
  ]
});

export default Contacts;
