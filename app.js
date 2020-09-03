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


//1
// const BYN = 'Buying BYN to EUR 3,145/BYN to USD 2,657/BYN to GRN 8,07'
// function askCurrency( question ) {
//         let x = prompt('Здравствуйте! Курс какой валюты вы хотите узнать?')
//         if (x === BYN) {
//             return alert(BYN)
//         } else {
//             x = prompt('Выберите валюту')
//         }
// }

// askCurrency('Здравствуйте! Курс какой валюты вы хотите узнать?')


const BYN = 'Buying BYN to EUR 3,145/BYN to USD 2,657/BYN to GRN 8,07/BYN'
const EUR = 'Buying EUR to USD 1.18/EUR to BYN 3,14/EUR to GRN 32,82/EUR'
const USD = 'Buying USD to EUR 0,84/USD to BYN 0,38/USD to GRN 0,036/USD'

let askCurrency = prompt ('Здравствуйте! Курс какой валюты вы хотите узнать?', 'BYN, USD, EUR')

switch ( askCurrency ) {
    case 'BYN':
    case 'белки':
    case 'белорусские рубли':
        alert ( BYN )
        break
    case 'USD':
    case 'доллары':
    case 'баксы':
        alert ( USD )
        break
    case 'EUR':
    case 'евро':
        alert ( EUR )
        break
    default:
        alert ('Пожалуйста, обновите страницу и выберите курс валюты')
}

// if (askCurrency === 'BYN' || 'белки' || 'белорусские рубли') {
//     alert (BYN)
// } else if (askCurrency === 'USD' || 'доллары' || 'баксы') {
//     alert (USD)
// } else if (askCurrency === 'EUR' || 'евро') {
//     alert (EUR)
// } else {
//     alert (askCurrency)
// }