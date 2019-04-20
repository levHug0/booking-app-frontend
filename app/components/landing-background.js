import Component from '@ember/component';

export default Component.extend({

    didInsertElement() {
        this._super(...arguments);
    },

    willDestroyElement() {
        this._super(...arguments);
    },

    actions: {
        show() {
            //Ember.$.getJSON('http://localhost:1337/rooms?id=3').then( res => {
            //    console.log(res);
            //    console.log(res.length);
            //});
        }
    }
});
