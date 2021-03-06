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
 let startGame = false; //标志游戏开始
 let finalStar = 3; //游戏结束时,星星等级
 let useTime = 0; //记录游戏时间
 let timeC; //计时
 let move = 0; //计步，初始为0
 let match = 0; //记录匹配对数 ，等于8时全部匹配成功，游戏结束
 let preCard = undefined; //存储翻开未匹配card
 let nowCard = undefined; //存储第二张匹配卡片
 let isMatching = false; //记录但前是否正在匹配第二张卡片过程中，初始为false

 /**
  *@description  Jquery库----程序入口
  */
 $(document).ready(function() {
   //随机初始卡片
   initCard();
   //为所有卡片添加click事件
   const ulString = document.querySelectorAll(".card");
   for (let a of ulString) {
     a.addEventListener('click', clickCard, false);
   }
   //为重置按钮添加click事件
   const Restart = document.querySelector(".fa-repeat");
   Restart.addEventListener('click', restartGame, false);
 });