angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope,$ionicSlideBoxDelegate,$timeout) {
    //
    $scope.screenHeight = window.innerHeight;
    //
    $scope.Photos = [
      {'src': 'http://lorempixel.com/500/500'},
      {'src': 'http://lorempixel.com/600/500'},
      {'src': 'http://lorempixel.com/500/600'},
      {'src': 'http://lorempixel.com/550/500'},
      {'src': 'http://lorempixel.com/500/550'},
      {'src': 'http://lorempixel.com/500/550'},
      {'src': 'http://lorempixel.com/500/550'}
    ];
    $timeout(function() {
      $ionicSlideBoxDelegate.update();
    }, 50);
    //
    $scope.modules = [
      {img: 'img/ionic.png', title: 'title'},
      {img: 'img/ionic.png', title: 'title'},
      {img: 'img/ionic.png', title: 'title'},
      {img: 'img/ionic.png', title: 'title'},
      {img: 'img/ionic.png', title: 'title'}
    ];
    //
    function slideLine(box,stf,delay,speed,h)
    {
      //取得id
      var slideBox = document.getElementById(box);
      //預設值 delay:幾毫秒滾動一次(1000毫秒=1秒)
      //       speed:數字越小越快，h:高度
      var delay = delay||1000,speed = speed||20,h = h||20;
      var tid = null,pause = false;
      //setInterval跟setTimeout的用法可以咕狗研究一下~
      var s = function(){tid=setInterval(slide, speed);}
      //主要動作的地方
      var slide = function(){
        //當滑鼠移到上面的時候就會暫停
        if(pause) return;
        //滾動條往下滾動 數字越大會越快但是看起來越不連貫，所以這邊用1
        slideBox.scrollTop += 1;
        //滾動到一個高度(h)的時候就停止
        if(slideBox.scrollTop%h == 0){
          //跟setInterval搭配使用的
          clearInterval(tid);
          //將剛剛滾動上去的前一項加回到整列的最後一項
          slideBox.appendChild(slideBox.getElementsByTagName(stf)[0]);
          //再重設滾動條到最上面
          slideBox.scrollTop = 0;
          //延遲多久再執行一次
          setTimeout(s, delay);
        }
      };
      //滑鼠移上去會暫停 移走會繼續動
      slideBox.onmouseover=function(){pause=true;};
      slideBox.onmouseout=function(){pause=false;};
      //起始的地方，沒有這個就不會動囉
      setTimeout(s, delay);
    }
    //網頁load完會執行一次
    //五個屬性各別是：外面div的id名稱、包在裡面的標籤類型
    //延遲毫秒數、速度、高度
    slideLine('ann_box','div',2000,25,20);
    //
    $scope.feadlines = [
      {type: '热门', title:'799红米Note配置屌炸天'},
      {type: '推荐', title:'欧美运营商可以让你年换iPhone'},
      {type: '最新', title:'华为Mate8参数/外观曝光'}
    ];
    //
    $scope.time = {second: 60};
    setInterval(function(){
      $scope.time.second--;
      if($scope.time.second == 0){
        $scope.time.second = 60;
      }
    }, 1000);
    var p = $timeout(function(){console.log('haha')}, 5000);
    p.then(function(){console.log('x')});
})

.controller('WeitaoCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('CommunityCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('CarCtrl', function($scope) {
    //
})

.controller('MeCtrl', function($scope) {
    //
    $scope.screenHeight = window.innerHeight;
    //
    var screenWidth = window.innerWidth;
    $scope.settingHeight = screenWidth*0.8;
    console.log(screenWidth*0.8);
    //
    $scope.orderForms = [
      {icon: 'img/me/iconfont-pay.png', title: '待付款'},
      {icon: 'img/me/iconfont-send.png', title: '待发货'},
      {icon: 'img/me/iconfont-deliver.png', title: '待收货'},
      {icon: 'img/me/iconfont-evaluate.png', title: '待评价'},
      {icon: 'img/me/iconfont-refund.png', title: '退款/售后'}
    ];
    //
    $scope.lists = [
      //{icon: 'img/list/iconfont-form.png', title: '全部订单', content: '查看全部已购宝贝', right: 'img/list/iconfont-right.png', hr: true},
      //{hr: true},
      {icon: 'img/list/iconfont-form.png', title: '每日赢宝箱', content: '每天做任务赢宝箱', right: 'img/list/iconfont-right.png', color: '#F95C00'},
      {icon: 'img/list/iconfont-friend.png', title: '我和好友的分享', content: '', right: 'img/list/iconfont-right.png', color: '#36AB50'},
      {icon: 'img/list/iconfont-ticket.png', title: '我的卡卷包', content: '您有1张网店卷', right: 'img/list/iconfont-right.png', color: '#30C5AE'},
      {icon: 'img/list/iconfont-mobile.png', title: '通讯助手', content: '查话费享专属权益', right: 'img/list/iconfont-right.png', color: '#F96000'},
      //{hr: true},
      //{icon: 'img/list/iconfont-taoxiaopu.png', title: '我是商家', content: '免费开店，轻松赚钱', right: 'img/list/iconfont-right.png', hr: true},
      //{hr: true},
      //{icon: 'img/list/iconfont-question.png', title: '帮助与反馈', content: '', right: 'img/list/iconfont-right.png', hr: true},
      //{hr: true}
    ]
});
