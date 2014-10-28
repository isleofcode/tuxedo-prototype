# Tuxedo

Tuxedo is a very quick, and very dirty, deprecated client prototype written in
Ember.js. It was written in a single afternoon shot, and is a nice
example of how quickly Ember.js can be used to mock ideas & prototypes.

Given our client prototypes often involve many feedback cycles with
_many_ changes, the goal is often to present the fastest prototype. To
that extent, dirty & fast fits this stage best.

##Use Case

Predominantly, Tuxedo was built to work within Phonegap and on mobile
devices. Mobile has not yet been optimized to feel native.

User logs in and sees many pending 'stories' which will be published
to a feed. User can see if the story has already been approved/denied,
and otherwise approve/deny a story.

Approving a story will publish the story to a given 'feed' (handled by a
Rails API) based on the 'Publish in' setting.

There is also an article index, which forms the basis of a 'story'
(stories & articles are not yet linked in Ember). Effectively, an
article is a pool of potential stories. The backend server
understands which conditions an article becomes a story.

##Next Prototype Iteration

- Many sub routes, such as story.index, must be handled;
- Animations for menu state;
- Move goopy templates to components/views;
- Better naming of 'article' resource;
- Use real data, vs FixtureAdapter; and
- queryParams

##What happened next

This simple prototype was enough for the client to
understand the product required drastic ideaology changes to become
viable. The prototype was dropped in favour of other
projects.
