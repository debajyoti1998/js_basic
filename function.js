// A javascripts function is a block of designed to perform a particular task.
// function defination
// before we use function , we need to define it .
// a function defination (also called a function declaration , or function statement)
// consist of function keyword followed by:
// the name of the function .
// a list of paramiters of function , enclosed in parentheses and separate by commas.
// the javascrupt statements that defined the function , enclosed in curly brackts,{...},

// var a =10;
// var b=20;
// var sum=a+b;
// console.log(sum)

// function sum(a,b){
//     summ=a+b
//     console.log(summ)
    
// }
// sum()
// sum(5,5)
// sum(10,80)


// ---------- why function -------------
// you can reuse code : defined the code once , nad use it many times.
// you can use the code many time time with different arguments,
// to produce different results.
//     OR   
// a function is a group of reusable code which can be called anywhere 
// in your program . this eliminates the need of writing the same code again and again


//   ----------- function expresions -----------------
// "Function expression simply means create a function and put in into the variable funExp"

// function sum(a,b){
//    return total=a+b ;
// }
// var funcExp=sum(5,59)
// console.log("the two number sum is " +funcExp );

//  ----------- Anonymous function 
// A function expression is similar to and has the same syntex as a function 
// declaration one can defined "name" function expressions (where the name of
// the expression might be used in the call stack for example )
// or "anonymous" function expressions.

var funcExp=function(a,b){
    return total=a+b;
}
var sum=funcExp(12,12)
console.log("the sum of two num "+ sum)
// console.log(funcExp(5,6));
