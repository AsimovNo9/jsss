// var FunnyLogger = require("funny-log");
// var logger = FunnyLogger();

// var randoDice = Math.floor(Math.random()*6)+1;


// switch(randoDice){
//     case(1):
//         logger.haha('One from your random die');
//         break;
//     case(2):
//         logger.goToYourDaddy('Two from your random die');
//         break;
//     case(3):
//         logger.angry('Three from your random die');
//         break;
//     case(4):
//         logger.why('Four from your random die');
//         break;
//     case(5):
//         logger.partyTime('Five from your random die');
//         break;
//     case(6):
//         logger.wtf('Six from your random die');
//         break;

//     default:
//         logger.iDontCare('Well, I don\'t care');
// }   

const logger = require("superhero-name-library")
console.log(logger.random())