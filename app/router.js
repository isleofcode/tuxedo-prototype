import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

//TODO - routes such as story.index, article.index not handled

Router.map(function() {
  this.resource('articles', function() {
    this.route('new');
    this.resource('article', {path: ':article_id'}, function() {
      this.route('edit');
    });
  });

  //TODO - better name. trend? content?
  this.resource('stories', function() {
    this.route('approved');
    this.route('denied');
    this.resource('story', {path: ':story_id'}, function() {
      this.route('edit');
    });
  });
});

export default Router;
