export default function(){
  this.transition(
    this.use('toLeft')
  );

  this.transition(
    this.toRoute('story.edit'),
    this.use('toDown')
  );

  this.transition(
    this.fromRoute('story.edit'),
    this.use('toUp')
  );
}
