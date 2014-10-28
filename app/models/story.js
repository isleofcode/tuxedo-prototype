import DS from 'ember-data';

var Story = DS.Model.extend({
  title: DS.attr('string'),
  summary: DS.attr('string'),
  trend: DS.attr('string'),

  approved: DS.attr('date'),
  denied: DS.attr('date'),
  actioned_by: DS.attr('string'),
});

Story.reopenClass({
  //Taste disclaimer: Fake stories not sourced by Alex
  FIXTURES: [
    {
      id: 1,
      title: "Paul Heyman, Daniel Bryan, Hulk Hogan, & Sting together right now at #SDCC! ",
      summary: "There is a panel featuring Daniel Bryan, Hulk Hogan, Paul Heyman and the first WWE Appearance of Sting at #SDCC",
      trend: "#sdcc"
    }, {
      id: 2,
      title: "WestJet plane with engine problems lands safely at Toronto Pearson airport ",
      summary: "Planes are best when they stay in the air",
      trend: "#goodplane",
    }, {
      id: 3,
      title: "Algeria's national airline - says it has lost contact with one of its planes flying from Burkina Faso ",
      summary: "This is an article summary",
      trend: "#sharknado",
    }, {
      id: 4,
      title: "Blue Jays prospects: Don’t believe the hype?  #bluejays #jays",
      summary: "What hype",
      trend: "#badsocial",
      denied: "Sun Aug 03 2014 22:20:06 GMT-0400 (EDT)",
      actioned_by: "Alex Blom"
    }, {
      id: 5,
      title: "In San Diego for comicon?  Come in to any one of our stores this weekend with your ticket",
      summary: "This is the summary for the article In San Diego for comicon?  Come in to any one of our stores this weekend with your ticket",
      trend: "#sdcc",
      approved: "Sun Aug 03 2014 22:20:06 GMT-0400 (EDT)",
      actioned_by: "Alex Blom",
    }
  ]
});

export default Story;
