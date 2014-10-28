import Ember from "ember";

export default Ember.ObjectController.extend({
  actions: {
    save: function() {
      var self = this;
      this.get('model').save().then(function() {
        //TODO - Flash success msg
        self.transitionToRoute('articles.index');
      }, function() {
        alert('oop error');
      });
    }
  }
});
