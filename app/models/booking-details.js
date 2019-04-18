import DS from 'ember-data';

export default DS.Model.extend({
    room_id: DS.belongsTo('room'),
    email: DS.attr('string'),
    rooms_needed: DS.attr('number'),
    start_date: DS.attr('string'),
    end_date: DS.attr('string')
});
