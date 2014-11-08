export default function() {
  // this.transition(
  //   this.fromRoute('memos.index'),
  //   this.toRoute('memos.memo'),
  //   this.use('toLeft'),
  //   this.reverse('toRight')
  // );
  this.transition(
    this.fromRoute('memos.index'),
    this.toRoute('add'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}

