import DS from 'ember-data';

export default DS.Model.extend({
    bookingDetails: DS.hasMany('booking-details'),
    name: DS.attr('string'),
    image: DS.attr('string'),
    price: DS.attr('number'),
    details: DS.attr('string'),
    address: DS.attr('string'),
    capacity: DS.attr('number'),
    active: DS.attr('number')
});