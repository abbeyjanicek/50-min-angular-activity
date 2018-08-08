let foodApp = angular.module('foodApp', []);

foodApp.controller('FoodController', function() {
    console.log('NG');
    let vm = this;
    vm.foodList = [];

    vm.addFood = function() {
        console.log('in addFood', vm.foodIn);
        vm.foodList.push(vm.foodIn);
        console.log('food list: ', vm.foodList);
    }
})