import Ember from "ember";

export default Ember.ObjectController.extend({
  postTime: "Now",
  postTimes: ["Now",
              "30 min",
              "60 min",
              "90 min",
              "120 min"],

  actions: {
    approve: function() {
      //TODO - better date handling
      this.get('model').set('approved', new Date());
      this.send('save');
    },

    deny: function() {
      this.get('model').set('denied', new Date());
      this.send('save');
    },

    save: function() {
      var self = this;
      var model = this.get('model');

      //TODO - actual data
      model.set('actioned_by', 'Tuxedo User #1');
      model.save().then(function() {
        //TODO - flash success to user
        self.transitionToRoute('stories.index');
      }, function() {
        alert('save error');
      });
    }
  }
});
