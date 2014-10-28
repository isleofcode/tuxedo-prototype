import Ember from "ember";
//This route can be replaced with queryParams
//But we need a dirty prototype with fixtures

 export default Ember.Route.extend({
   model: function(){
    return this.store.filter('story', function(story) {
      return story.get('approved') !== undefined;
    });
  },

  renderTemplate: function(controller) {
    this.render('stories/index', {controller: controller});
  }
});
