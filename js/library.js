/**00
 *@description           从CARDS_LIB中随机弹出一个卡片
 *@return {string} card  随机弹出的卡片
 */
function popOne() {
  var leng = Math.floor(Math.random() * CARDS_LIB.length); //生成0-15之间随机数
  var card = CARDS_LIB[leng]; //获得该卡片
  CARDS_LIB.splice(leng, 1); //从卡片数组中删除
  return card; //返回随机生成的卡片
}

/**01
 *@description  initCard 游戏初始化设置 随机生成卡片
 */
function initCard() {
  setStar(6); //初始设置3星
  const deck = document.querySelector(".deck"); //获取deck元素
  for (let i = 0; i < 16; i++) { //按序获取  随机设置card li class 属性
    deck.children[i].children[0].setAttribute("class", popOne()); //随机设置卡片图标
  }
}

/**02
 *@description  clickCard 鼠标点击事件 ，点击后显示卡片内容
 *@param {object} e
 */
function clickCard(e) {
  if (preCard == undefined) { //翻开一张卡片
    preCard = e.currentTarget; //记忆一张卡片
    e.currentTarget.setAttribute("class", "card open show"); //显示点击卡片内容
  } else { //翻开第二张卡片，看是否匹配
    nowCard = e.currentTarget;
    if (preCard === nowCard) { //如果点击是同一Card，则忽略该操作，并重设nowCard
      nowCard = undefined;
    } else {
      if (preCard.children[0].getAttribute("class") == nowCard.children[0].getAttribute("class")) { //卡片匹配
        preCard.setAttribute("class", "card match");
        nowCard.setAttribute("class", "card match");
        setTimeout(matchEvent, 100); //移除该卡片点击监听事件
        setMoves(++move); //记步
        match++;
      } else { //不匹配，先设置红色背景（fail属性），再恢复原状态
        preCard.setAttribute("class", "card fail show");
        nowCard.setAttribute("class", "card fail show");
        setMoves(++move); //记步
        setTimeout(noMatchEvent, 200);
      }
    }
  }
  if (move == 1) { //第一次点击时记录游戏开始时间
    startTime = Date.now();
  }
  if (match == 8) { //如果8对卡片全部匹配，则游戏结束！
    setTimeout(showResult, 500);
  }
}

/**03
 *@description  matchEvent  卡片匹配回调函数
 */
function matchEvent() {
  preCard.removeEventListener('click', clickCard, false); //移除卡片点击事件
  nowCard.removeEventListener('click', clickCard, false);
  preCard = undefined; //重设preCard，nowCard
  nowCard = undefined;
}

/**04
 *@description  noMatchEvent  卡片不匹配回调函数
 */
function noMatchEvent() {
  preCard.setAttribute("class", "card"); //恢复卡片初始状态
  nowCard.setAttribute("class", "card");
  preCard = undefined; //重设preCard，nowCard
  nowCard = undefined;
}

/**05
 *@description  setMoves 计步
 */
function setMoves(move) {
  const moves = document.querySelector(".moves");
  moves.textContent = move;
  if (move > 10 && move <= 15) { //设置星级评分
    setStar(5);
  } else if (move > 15 && move <= 20) {
    setStar(4);
  } else if (move > 20 && move <= 25) {
    setStar(3);
  } else if (move > 25 && move <= 30) {
    setStar(2);
  } else if (move > 30 && move <= 35) {
    setStar(1);
  } else if (move > 35) {
    setStar(0);
  }
}

/**06
 *@description restartGame 重设游戏
 */
function restartGame() {
  location.reload();
}

/**07
 *@description showResult 显示游戏结果
 */
function showResult() {
  let useTime = Date.now() - startTime;
  let result = window.confirm("您用时" + (useTime / 1000 - 0.5) + "秒！");
}

/**08
 *@description   setSrar 设置评分
 *@param {integer} num  评分参数 0--0颗星，1--0.5颗星;2--1颗星;3--1.5颗星;4--2颗星;5--2.5颗星;6--3颗星
 */
function setStar(num) {
  var stars = document.querySelector(".stars");
  switch (num) {
    case 0:
      stars.children[0].children[0].setAttribute("class", "fa fa-star-o");
      stars.children[1].children[0].setAttribute("class", "fa fa-star-o");
      stars.children[2].children[0].setAttribute("class", "fa fa-star-o");
      break;
    case 1:
      stars.children[0].children[0].setAttribute("class", "fa fa-star-half-o");
      stars.children[1].children[0].setAttribute("class", "fa fa-star-o");
      stars.children[2].children[0].setAttribute("class", "fa fa-star-o");
      break;
    case 2:
      stars.children[0].children[0].setAttribute("class", "fa fa-star");
      stars.children[1].children[0].setAttribute("class", "fa fa-star-o");
      stars.children[2].children[0].setAttribute("class", "fa fa-star-o");
      break;
    case 3:
      stars.children[0].children[0].setAttribute("class", "fa fa-star");
      stars.children[1].children[0].setAttribute("class", "fa fa-star-half-o");
      stars.children[2].children[0].setAttribute("class", "fa fa-star-o");
      break;
    case 4:
      stars.children[0].children[0].setAttribute("class", "fa fa-star");
      stars.children[1].children[0].setAttribute("class", "fa fa-star");
      stars.children[2].children[0].setAttribute("class", "fa fa-star-o");
      break;
    case 5:
      stars.children[0].children[0].setAttribute("class", "fa fa-star");
      stars.children[1].children[0].setAttribute("class", "fa fa-star");
      stars.children[2].children[0].setAttribute("class", "fa fa-star-half-o");
      break;
    case 6:
      stars.children[0].children[0].setAttribute("class", "fa fa-star");
      stars.children[1].children[0].setAttribute("class", "fa fa-star");
      stars.children[2].children[0].setAttribute("class", "fa fa-star");
      break;
    default:
      break;
  }
}