export default Ember.Route.extend({
    moment: Ember.inject.service(),
    beforeModel() {
        this.get('moment').setLocale('en-au');
        this.get('moment').setTimeZone('Australia/Brisbane');
    }
  });