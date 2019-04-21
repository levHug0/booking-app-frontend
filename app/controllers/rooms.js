import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default Controller.extend({
    sorted_rooms: sort('model.rooms', (a, b) => {
        return (a.id > b.id) ? 1 : (a.id < b.id) ? -1 : 0;
    })
});
