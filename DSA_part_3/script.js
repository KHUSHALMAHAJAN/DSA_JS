// var n = Number(prompt("Enter a number :- "))
// for(var i  = 0;i<n;i++){
//     console.log("hello world")
// }

// var n = Number(prompt("Enter a number :- "))
// sum = 0
// for(var i = 1;i<=n;i++){
//     sum += i
// }
// console.log(sum);

// var n  = Number(prompt("Enter a number :- "))
// fact = 1
// for(var i  = 1;i<=5;i++){
//     fact *= i
// }
// console.log(fact);

// var n = Number(prompt("Enter a number"))
// for(var i = 1;i<=Math.floor(n/2);i++){
//     if(n%i === 0){
//         console.log(i);
//     }
// }
// console.log(n);

// var n = Number(prompt("Enter a number"))
// isprime = true
// for(var i = 2;i<=Math.floor(n/2);i++){
//     if(n%i === 0){
//         isprime = false
//     }
// }
// console.log(isprime);

// var n = Number(prompt("enter a numebr"))
// sum = 0
// while(n > 0){
//     rem = n % 10
//     sum += rem
//     n = Math.floor(n/10)
// }
// console.log(sum);


// var n = Number(prompt("enter a number"))
// var resver = 0
// while(n > 0){
//    resver *= 10
//    rem = n%10
//    resver += rem
//    n = Math.floor(n/10) 
// }
// console.log(resver);

// var n = Number(prompt("enter a number"))
// var copy = n
// var sumfact = 0
// while(n > 0){
//     fact = 1
//     rem = n%10
//     for(var i = 1;i<=rem;i++){
//         fact *= i
//     }
//     sumfact += fact
//     n = Math.floor(n/10)
// }
// if(sumfact === copy){
//     console.log("strong number");
// }
// else{
//     console.log("not storng number");
// }

var radom_num = Math.floor(Math.random()*100)+1
console.log(radom_num);


var guess_num = 0
do{
    // guess_num = Number(prompt("Enter a number"))
    if(isNaN(guess_num)|| guess_num<1 || guess_num > 100){
        console.log("lavdya 1 te 100 number enter a martherchod");
        continue
    }
    if(guess_num > radom_num){
        console.log("too big");
    }
    if (guess_num < radom_num) {
        console.log("too low")
    } else {
        console.log("congratulation ");   
    }
}while(guess_num != radom_num)