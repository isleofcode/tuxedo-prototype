import Ember from 'ember';

export default {
  name: 'touch-events',
  initialize: function() {
    Ember.View.reopen({
      touchStart: Ember.aliasMethod('click')
    });
  }
};
