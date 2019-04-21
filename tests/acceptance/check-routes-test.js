import { module, test } from 'qunit';
import { click, visit, currentURL, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | check routes', function(hooks) {
  setupApplicationTest(hooks);

  test('Check Routes and Route Elements /check-routes', async function(assert) {
    await visit('/');
    
    assert.equal(currentURL(), '/', "In Landing Page");
    assert.equal( this.element.querySelector('img').src, 'http://localhost:4200/assets/images/logo.png', "Should get the correct Image file" )
    assert.equal( this.element.querySelector('.ui.primary.big.button').textContent, "Rooms", "Button should say Rooms");

    await visit('/rooms');
    assert.equal(currentURL(), '/rooms', "Rooms List");

    //  Test Ordering from Luxury to Junior
    assert.equal( this.element.querySelectorAll('.image a')[0].href, "http://localhost:4200/rooms/1", "Correct Luxury Id" );
    assert.equal( this.element.querySelectorAll('.image a')[2].href, "http://localhost:4200/rooms/3", "Correct Standard+ Id");
    assert.equal( this.element.querySelectorAll('.image a')[5].href, "http://localhost:4200/rooms/6", "Correct Junior Id" );

    // Click on first View button, url should be /rooms/1
    await click( this.element.querySelectorAll('.image a')[0] );
    assert.equal( currentURL(), '/rooms/1', "Url should be /rooms/1" );

    // Test back button to see if route goes back to /rooms
    await click( this.element.querySelector('a') );
    assert.equal( currentURL(), '/rooms', "Back to rooms route /rooms" );
  });
});
