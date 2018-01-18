/*
 * 包含所有卡片的列表
 */
 const CARDS_LIB = [
   "fa fa-diamond",
   "fa fa-paper-plane-o",
   "fa fa-anchor",
   "fa fa-bolt",
   "fa fa-cube",
   "fa fa-leaf",
   "fa fa-bicycle",
   "fa fa-bomb",
   "fa fa-diamond",
   "fa fa-paper-plane-o",
   "fa fa-anchor",
   "fa fa-bolt",
   "fa fa-cube",
   "fa fa-leaf",
   "fa fa-bicycle",
   "fa fa-bomb"
 ];
let finalStar = 3;  //游戏结束时,星星等级
let move = 0;  //计步，初始为0
let timer = 0;  //计时，初始为0
let match = 0;  //记录匹配对数 ，等于8时全部匹配成功，游戏结束
let openList = []; //存储翻开未匹配card

/**
*@description  Jquery库----程序入口
*/
$(document).ready(function(){
  //随机初始卡片
  initCard();
  //为所有卡片添加click事件
  const ulString = document.querySelectorAll(".card");
  for(let a of ulString) {
      a.addEventListener('click', showCard,false);
  }
  //为重置按钮添加click事件
  const Restart = document.querySelector(".restart");
  Restart.addEventListener('click',restartGame,false);

  timer = stopWatch();


})

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
