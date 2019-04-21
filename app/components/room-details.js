import Component from '@ember/component';

export default Component.extend({

    didInsertElement() {
        this._super(...arguments);

        let disabledDays = this.get("occupied_days").map( booking => {
            return {
                from: moment.unix(booking.start_date).format('DD MMM, YYYY'),
                to: moment.unix(booking.end_date).format('DD MMM, YYYY')
            };
        });
        
        this.$('.date-pickr').flatpickr({
            dateFormat: 'd M, Y',
            minDate: 'today',
            disable: disabledDays
        });
    },

    actions: {
        book() {
            let email     = this.$("#email").val();
            let capacity  = this.$("input[type='number']").val();
            let startDate = this.$("#startDate").val();
            let endDate   = this.$("#endDate").val();
            let roomId    = this.get("room.id");

            let error = false;

            if ( email.length === 0 ) {
                error = true;
            }

            if ( parseInt(capacity) > this.get("room.capacity") ) {
                error = true;
            }

            if ( startDate.length === 0 || endDate.length === 0 ) {
                error = true;
            }

            if ( error ) {
                alert("Something went wrong. Check all Inputs and Try Again.");
            } else {
                // send data
                let payload = {
                    email: email,
                    capacity: capacity,
                    start: moment(startDate).format('X'),  // unix time stamp
                    end: moment(endDate).format('X'),
                    id: roomId
                };

                // Send to backend to create booking
                Ember.$.post('http://localhost:1337/bookingdetails', payload, (data, status) => {
                    if (status === "success") {
                        alert(data);
                        window.location.replace('/');
                    }
                }).fail( err => {
                    alert('Error: ' + err.responseText);
                });
            }
        }
    }
});
