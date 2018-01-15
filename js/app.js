/*
 * Create a list that holds all of your cards
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
let move = 0;  //计步，初始为0
let timer = 0;  //计时，初始为0
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//var array=[];
// Shuffle function from http://stackoverflow.com/a/2450976
/**function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
*/
/**000
*@description           从CARDS_LIB中随机弹出一个卡片
*@return {string}  card 随机弹出的卡片
*/
function popOne(){
  var leng = Math.floor(Math.random()*CARDS_LIB.length);
  var card = CARDS_LIB[leng];
  CARDS_LIB.splice(leng,1);
  return card;
}

/**001
*@description  initCard 游戏初始化设置 随机生成卡片
*/
function initCard(){
  //
  //获取deck
  const deck = document.querySelector(".deck");
  //按序获取  随机设置card li class 属性
  for(let i=0;i<16; i++){
    let j = 2*i+1;
    deck.childNodes[j].childNodes[1].setAttribute("class",popOne());
  }
}

/**002
*@description  showCard 鼠标点击事件 ，点击后显示卡片内容
*@param {object} e
*/
function showCard(e){
  e.currentTarget.setAttribute("class","card open show");
  setMoves(++move);
  if(move==16){
    gameOver();
  }
}

/**003
*@description   setSrar 设置评分
*@param {integer} num  评分参数 1--1颗星;2--2颗星;3--3颗星
*/
function setSrar(num){
  const moves = document.querySelector(".moves");
  moves.textContent = num;
}

/**004
*@description  setMoves 计步
*/
function setMoves(num){
  const moves = document.querySelector(".moves");
  moves.textContent= num;
}

/**005
*@description restartGame 重设游戏
*/
function restartGame(){
  location.reload();
}

/**006
*@description stopWatch  计时
*/
function stopWatch(){
  let startTime = Date.now();

  function getDelay(){
    let elaspedTime = Date.now() - startTime;
    alert("您用时"+elaspedTime/1000+"秒！");
  }

  return getDelay;
}

/**
*@description gameOver 结束游戏
*/
function gameOver(){
  timer();
}

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
