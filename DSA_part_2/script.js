// let age = Number(prompt("Enter your age :- "))
// function checkage(age) {
//     if (isNaN(age)) {
//         console.log("plz enter a valid number")
//     }
//     else {
//         if (age > 0) {
//             if (age >= 18) {
//                 console.log("your are valid user to volt")
//             }
//             else {
//                 console.log("your are not valid user volt")
//             }
//         }
//         else {
//             console.log("age can not be negitive")
//         }
//     }
// }
// checkage(age)


// let amount  = Number(prompt("Enter a amount :- "))
// function discount(amount){
//     dis = 0
//     if(amount>0 && amount <= 5000){
//         dis = 0
//     }
//     else if(amount > 5000 && amount <= 7000){
//         dis = 5
//     }
//     else if(amount > 7000 && amount <= 9000){
//         dis = 10
//     }
//     else{
//         dis = 20
//     }
//     console.log(amount - Math.floor((amount *dis/100)))
// }
// discount(amount)


// let unit = 200
// function checkunit(unit){
//     amount = 0
//     if(unit > 400){
//         amount += (unit - 400) * 13
//         unit = 400
//     }
//     if(unit > 200 && unit <= 400){
//         amount += (unit - 200) * 8
//         unit = 200
//     }
//     if(unit > 100 && unit <= 200){
//         amount += (unit - 100) * 6
//         unit = 100
//     }
//     if(unit > 0){
//         amount += (unit) * 4.2
//     }
//     console.log(amount)
// }
// checkunit(unit)

let amount = 5671
if (amount >= 500) {
    console.log("500 note are ", Math.floor(amount / 500))
    amount = amount % 500
}
if (amount >= 100) {
    console.log("100 note are ", Math.floor(amount / 100))
    amount = amount % 100
}
if (amount >= 50) {
    console.log("50 note are ", Math.floor(amount / 50))
    amount = amount % 50
}
if (amount >= 20) {
    console.log("20 note are ", Math.floor(amount / 20))
    amount = amount % 20
}
if (amount >= 10) {
    console.log("10 note are ", Math.floor(amount / 10))
    amount = amount % 10
}
if (amount >= 5) {
    console.log("5 note are ", Math.floor(amount / 5))
    amount = amount % 5
}
if (amount >= 2) {
    console.log("2 note are ", Math.floor(amount / 2))
    amount = amount % 2
}
if (amount == 1)
    console.log("1 note ", amount)