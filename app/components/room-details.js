import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        this._super(...arguments);
        
        this.$('.date-pickr').flatpickr({
            dateFormat: 'd M, Y',
            minDate: 'today'
        });
    }
});
