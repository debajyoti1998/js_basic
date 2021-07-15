// var towmorrow="rain";
// if(towmorrow=="rain"){
//     console.log("take a rain code")
// }else{
//     console.log("no need to take a raincode");
// }

// challenge time-------
// example ---> write a program that works out whwther if a given year is a 
// leap year or not

var year = 2020;
if (year%4===0){
    if (year%100===0){
        console.log("this year "+ year +" is not a leap year")

    }else{
        console.log("this year "+ year +" is  a leap year")

    }

}else{
    console.log("this year "+ year +" is not a leap year")
}

// challange no2 --- what is truthy and falsy values in javascripts -----
// we have 5 falsy values in javascripts 
// 0,"",undefined,null,NaN ,false** is anyway
if(score=0){
    console.log("you won this game")
}else{
    console.log("you lost this game")
}

// conditional (ternary) operator
// var age=18;
// console.log((age>=18 ? "you can vote" : "you can't vote "));
// // else if--------
// var area="tryangle";
// if(area=="circle"){
//     console.log("the area of circle")

// }else if(area=='reactangle'){
//     console.log("the area of reactangle")

// }else if(area=="tryangle"){
//     console.log("the area of tryangle")

// }else{
//     console.log("please enter valid value")
// }

// -------------switch_statement -------------  
var area="reactangle";
switch(area){
    case "circle":
        console.log("the area of circle");
        break;
    case "tryangle":
        console.log("the area of tryangle");
        break;
    case "reactangle":
        console.log("the area of reactangle ");
        break;
    default:
        console.log("please enter valid value");
}

