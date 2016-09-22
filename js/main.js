var app = angular.module("landingPage", []);
app.controller("mainController",['$scope','$window',function($scope,$window){
    $scope.tabman = {
        "container" : document.getElementById("tabs"),
        "content": [
            {
                title: "Campaign"
                
            },
            {
                title: "Rewards"
            },
            {
                title: "About Us"
            },
        ],
        "change": function($index){
            this.selected = $index;
        },
        "class": function($index){
            return $index === this.selected ? "selected" : "";
        },
        "selector": function(){
            var sum = 0;
            for(var cont = 0; cont < this.selected ; cont+=1){
                console.log(this.container.children[cont]);
                sum+=this.container.children[cont].clientWidth;
            }
            return {
                "left":sum+"px",
                "width":this.container.children[this.selected].clientWidth+"px"
            };
        },
        "selected": 0
    };
}]);