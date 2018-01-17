/**00
*@description           从CARDS_LIB中随机弹出一个卡片
*@return {string} card  随机弹出的卡片
*/
function popOne(){
  var leng = Math.floor(Math.random()*CARDS_LIB.length);    //生成0-15之间随机数
  var card = CARDS_LIB[leng];                               //获得该卡片
  CARDS_LIB.splice(leng,1);                                 //从卡片数组中删除
  return card;                                              //返回随机生成的卡片
}

/**01
*@description  initCard 游戏初始化设置 随机生成卡片
*/
function initCard(){
    setStar(3);
  //获取deck
  const deck = document.querySelector(".deck");
  //按序获取  随机设置card li class 属性
  for(let i=0;i<16; i++){
    deck.children[i].children[0].setAttribute("class",popOne());
  }
}

/**02
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

/**03
*@description  setMoves 计步
*/
function setMoves(num){
  const moves = document.querySelector(".moves");
  moves.textContent= num;
}

/**04
*@description restartGame 重设游戏
*/
function restartGame(){
  location.reload();
}

/**05
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

/**06
*@description gameOver 结束游戏
*/
function gameOver(){
  timer();
  setStar(2);
}
/**07
*@description   setSrar 设置评分
*@param {integer} num  评分参数 0--0颗星，1--0.5颗星;2--1颗星;3--1.5颗星;4--2颗星;5--2.5颗星;6--3颗星
*/
function setStar(num){
  var stars = document.querySelector(".stars");
  switch (num) {
      case 0:
          stars.children[0].children[0].setAttribute("class","fa fa-star-o");
          stars.children[1].children[0].setAttribute("class","fa fa-star-o");
          stars.children[2].children[0].setAttribute("class","fa fa-star-o");
          break;
      case 1:
          stars.children[0].children[0].setAttribute("class","fa fa-star-half-o");
          stars.children[1].children[0].setAttribute("class","fa fa-star-o");
          stars.children[2].children[0].setAttribute("class","fa fa-star-o");
          break;
      case 2:
          stars.children[0].children[0].setAttribute("class","fa fa-star");
          stars.children[1].children[0].setAttribute("class","fa fa-star-o");
          stars.children[2].children[0].setAttribute("class","fa fa-star-o");
          break;
      case 3:
          stars.children[0].children[0].setAttribute("class","fa fa-star");
          stars.children[1].children[0].setAttribute("class","fa fa-star-half-o");
          stars.children[2].children[0].setAttribute("class","fa fa-star-o");
          break;
      case 4:
          stars.children[0].children[0].setAttribute("class","fa fa-star");
          stars.children[1].children[0].setAttribute("class","fa fa-star");
          stars.children[2].children[0].setAttribute("class","fa fa-star-o");
          break;
      case 5:
          stars.children[0].children[0].setAttribute("class","fa fa-star");
          stars.children[1].children[0].setAttribute("class","fa fa-star");
          stars.children[2].children[0].setAttribute("class","fa fa-star-half-o");
          break;
      case 6:
          stars.children[0].children[0].setAttribute("class","fa fa-star");
          stars.children[1].children[0].setAttribute("class","fa fa-star");
          stars.children[2].children[0].setAttribute("class","fa fa-star");
          break;
      default:
          break;
  }
}
