angular.module('myApp',[])
  .controller('HomeCtrl', function($scope, $timeout) {
//    $scope.name = 'Superhero';
//    $scope.numButtons = 3;
//    $scope.buttons = [1,2,3,4,5];
//    	$scope.buttons1 = [1];
  //Starting Variables
  
  //Arrays
    $scope.videos = [];
    $scope.photos = [];
    console.log("asasd");
    
    $(document).ready(function(){
    $('.toggle').on('click', function() {
      $('.container').stop().addClass('active');
    });

    $('.close').on('click', function() {
      $('.container').stop().removeClass('active');
    });

    });
    
    $scope.submit = function() {
      var i;
        for(i = 0; i < $scope.numVideos; i++) {
        $scope.videos.push(i);
    }
    for(i = 0; i < $scope.numPhotos; i++) {
      $scope.photos.push(i);
    }
    $timeout( function(){
        $scope.$apply;
        console.log($scope.videos);
        $(".code").html('<pre>'+$(".frame1").html()+'</pre>');
    }, 100);
    }
});