// let age = prompt('What is ur age');
// if ( age < 18) {
//     alert ("Sorry, you are too young to drive this car. Powering off");
// } else if ( age == 18) {
//     alert ("Congratulations on your first year of driving. Enjoy the ride!");
// } else if ( age > 18) {
//     alert ("Powering On. Enjoy the ride!");
// }




// let browser = prompt ('What is your browser?');
// if ( browser == 'Edge'){
//     alert ("You've got the Edge!");
// } else if ( browser == 'Chrome'
// || browser == 'Safari'
// || browser == 'Opera') {
//     alert ('Okay we support these browsers too');
// } else {
//     alert ('We hope that this page looks ok!');
// }



// const number = +prompt('Enter ur number');
// switch (number) {
//     case 0:
//         alert ('Вы ввели число 0');
//         break;
//     case 1:
//         alert ('You\'ve entered 1');
//         break;
//     case 2:
//     case 3:
//         alert ('You\'ve entered 2 or 3');
//         break;

// }


// const greet = function (name) {
//     console.log(`Привет ${name}!`)
// }
// greet('Andy')

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     'Вы согласны?',
//     () => alert('Вы согласились'),
//     () => alert('Вы отказались')
// )

// const sum = (a, b) => a + b 
// console.log (sum(41, 1))


// let colors = ['red', 'blue', 'black']
// // colors.push ('white')
// // colors.unshift ('purple')
// // colors.shift () //delete the first element and return
// // colors.pop () //delete the last elemet and return
// // colors.reverse ()
// // console.log (colors)
// console.log(colors.includes('white'))

let colors = ['red', 'blue', 'black']
for (let color of colors){
    alert(color)
}