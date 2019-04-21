import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    model(params) {
        return RSVP.hash({
            room: this.store.findRecord('room', params.id),
            daysBooked: Ember.$.getJSON(`http://localhost:1337/bookingdetails?room_id=${params.id}&sort=start_date+asc`)
        });
    }
});
