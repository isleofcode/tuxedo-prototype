import DS from 'ember-data';

var Article = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  body: DS.attr('string')
});

Article.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Alex is on an aeroplane",
      url: "http://bit.ly/flying",
      body: "And does not feel like writing a long article"
    }, {
      id: 2,
      title: "The plane is Air Canada",
      url: "http://bit.ly/exitrow",
      body: "And Alex has an exit row"
    }
  ]
});

export default Article;
