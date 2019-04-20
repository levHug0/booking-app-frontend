import Controller from '@ember/controller';

export default Controller.extend({
    sorted_rooms: Ember.computed.sort('model.rooms', 'sortDefinition'),
    sortDefinition: ["id:asc"]
});
