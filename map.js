// arr=[1,2,3,6,5,4,7,8,9]
// let newarr=arr.map((curval,index,arr)=>{
//     return curval>5;
// });
// console.log(arr)
// console.log(newarr)

// ----------------------------
// let  newarr=arr.map((curval,index,arr)=>{
//     return `index no = ${index} and the value ${curval} and belong to ${arr}`
// });
// console.log(arr)
// console.log(newarr)
// -----------------------

// let arr=[25,36,49,64,81];
// let newarr=arr.map((curVal)=>{
//     return Math.sqrt(curVal);
// })
// console.log(arr)
// console.log(newarr)
// ------------
// let arr=[2,3,4,5,6,8]
// let arr2=arr.map((curval)=>{
//     return curval*2
// }).filter((curval)=>{
//     return curval >10
// }).reduce((eli,curval)=>{
//     return eli+=curval
// })
// console.log(arr2)
// // -------- same but small process ---------
// let arr1=[2,3,4,5,6,8]
// let arr3=arr1.map((curval)=> curval*2).filter((curval)=> curval >10).reduce((eli,curval)=> eli+=curval);
// console.log(arr2)

// ------------ reduce method -----
// flatten an array means to convart the 3d or 2d array into a single diamentional array
// The reduce() method execute a reducer function (that you provide) on each eliment 
// of the array resulting a single output value.
// The reducer function takes four arguments:
// Accumulator
// Current value
// Current index
// Source array

// arr=[2,3,6,5,4]
// let newarr=arr.reduce((accumulator,curElem)=>{
//     debugger;
//     return accumulator+=curElem;
// },9);
// console.log(newarr)



// ----- flatten an array means to convart the 3d or 2d array
//  into a single diamentional array.
const arr=[
    ['zone1','zone2'],            //array of an array
    ['zone3','zone4'],           //this is two diamentional array
    ['zone5','zone6'],
    ['zone7','zone8']
]
let flatarr=arr.reduce((accumulator,curval)=>{
    return accumulator.concat(curval);
})
console.log(flatarr)