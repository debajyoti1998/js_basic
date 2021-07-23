// var myfriends=['babun','debajyoti','papai','tatai','tutun']
// console.log(myfriends)
// console.log(myfriends[myfriends.length-1])

// ----if we want to check the length of eliment of an array
// console.log(myfriends.length)

// ----- for loop use array
// for(var i=0; i<myfriends.length;i++){
//     console.log(myfriends[i]);
// }

// --------- After ES6 we have for..of and for..in loop too
// var myfriends=['babun','debajyoti','papai','tatai','tutun']
// for (var eliment in myfriends){
//     console.log(eliment)
// }
// ----for..of loop
// myfriends=['babun','debajyoti','papai','tatai','tutun']
// for(var eliment of myfriends){
//     console.log(eliment)
// }

// ------forEach ----
// myfriends.forEach(function(eliment,index,array){
//     console.log(eliment + " index: " +index +" "+ array)
// });

// ------using fat arrow function --
// myfriends=['babun','debajyoti','papai','tatai','tutun']
// myfriends.forEach((eliment,index,array)=>{
//     console.log(eliment + " index: " +index +" "+ array)
// })

// var myfriends=['babun','debajyoti','papai','tatai','tutun']

// console.log(myfriends.indexOf)

//----- Array Subsection 4 Perform CRUD ---------- 
//Array.pototype.push
// the push() method adds one or more eliment to the end of on array 
// and return the new length of the array

// const animals=['pigs','goats','sheep']
// const count=animals.push('chicken','cow')
// console.log(animals);
// console.log(count);

//Array.pototype.unshift
// the unshift() method adds one or more eliments to the beginning of an array
// and return the new length of the array.

// const animals=['pigs','goats','sheep']
// animals.unshift('chicken')
// console.log(animals)

//Array.pototype.pop()
// The pop() method removes the last eliment from an array and return the 
// aliment . This method change the length of the array.

// const animals=['pigs','goats','sheep']
// animals.pop();
// console.log(animals)

//Array.pototype.shift()
// The shift() method removes the first eliment from an array and return
// that removed eliment. this method changes the length of the array.
// const animals=['pigs','goats','sheep']
// console.log(animals.shift()) 
// console.log(animals)

// ---Array.pototype.splice()
// adds and/or removes eliments from an array.
// 1.add dec at the end of the array?
// 2.what is return value of the splice method ?
// 3.update march to March (update)?
// 4.Delete june from an array?

// const month=['jan','march','April','June','July']
// month.splice(1,0,'hello')
// console.log(month)
// const indexofmonth=month.indexOf('march')
// console.log(indexofmonth)
// if(indexofmonth != -1){
//     const updateMonth=month.splice(indexofmonth,1,'March')
//     console.log(month)
// }else{
//     console.log("no data found")
// }

// sol4
// const month=['jan','march','April','June','July']
// const indexOfMonth=month.indexOf('April')
// console.log(indexOfMonth)
// if (indexOfMonth != -1){
//     const uodateMonth=month.splice(indexOfMonth,1)
//     // const uodateMonth=month.splice(indexOfMonth,Infinity)
//     console.log(month)
// }

