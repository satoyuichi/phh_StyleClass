document.addEventListener ('DOMContentLoaded', function () {
  let elem = document.getElementById ('elem');

  // // マウスポインターが乗ったタイミングで背景色を変更
  // elem.addEventListener ('mouseover', function() {
  //   this.className = 'highlight';
  // }, false);

  // // マウスポインターが乗ったタイミングで背景色を戻す
  // elem.addEventListener ('mouseout', function () {
  //   this.className = '';
  // }, false);

  // クリックしたタイミングで背景色を変更
  elem.addEventListener ('click', function () {
    this.className = (this.className === 'highlight' ? '' : 'highlight');
  }, false);

}, false);
