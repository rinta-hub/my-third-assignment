function kilometerToMeter(kilometer){
     var meter  = kilometer * 1000;
     return meter;
}
var aminMeter = kilometerToMeter(5);
console.log(aminMeter);


// budgetCalculator

function budgetCalculator(num){
     var result = num * 3;
     return result;
}
var clock = budgetCalculator(50);
var phone = budgetCalculator(100);
var laptop = budgetCalculator(500);


// console.log(clock, phone, laptop);
var total = clock + phone + laptop;
console.log(total);

// hotelCost
function hotelCost(rent){
     var cost = 0;
     if(rent <=10){
          cost = rent * 100;
     }
     else if(rent <=20){
          var first10 = 10 * 100;
          var remaining = rent - 10;
          var second10 = remaining * 80;
          cost = first10 + second10;
     }
     else{
          var first10 = 10 * 100; 
          var second10 = 10 * 80;
          var remaining = rent -20;
          var third10 = remaining * 50; 
          cost = first10 + second10 + third10;
     }
     return cost;
}
var count = hotelCost(25);
console.log(count);

// megaFriend
function megaFriend(names){
     var max =names[0];
     for(var i = 0; i< names.length; i++){
          var element = names[i];
          if(elements > max){
               max = element;
          }
          return max;
     }
}
var names = [amina, amin, jui, juti];
var result = megaFriend(names);
console.log('big name of the array:', result);
