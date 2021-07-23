// var str='apple,mango,banana'
// let res=str.slice(7,-2)
// console.log(res)


// ---- challange time-----
// display only 280 characters of string like one used in Twitter?
// ----------------------
// let mytweets= "my name is debajyoti panda i am 23 year old , right now i learning javascripts , and this is the vary improtent tropic"
// myactualtweet=mytweets.slice(0,100)
// console.log(mytweets.length)
// console.log(myactualtweet.length)
// console.log(myactualtweet)
// ------------------------------
// ---- substring() method ---------------
// sustring() is similar to slice
// the different is the substring() cannot accept negative indexes.
// -----------
// var str='apple, mango, banana' ;
// let res=str.substring(0,9)
// console.log(res)
// --------------
// ---- the substr() Method 
// the different is that the second paramiter specifies the length of the extracted part.
// ----------
// var str='apple, mango, banana' ;
// let res=str.substr(-4)
// console.log(res)
// ---------replace method 
// point to be remember 
// 1.the replace() method does not change the styring it is called on.it return a new string
// 2. by default the replace method replace only the first match
// 3.By default the replace() method vase sensetive
// writting VINOD (with upper-case) will not work


// let myname="my name is debajyoti panda"
// let replaceata=myname.replace('debajyoti','Debajyoti')
// console.log(replaceata)
// console.log(myname)
// ---------------
// the charAt() method -------
// the charAt method return the character at a specified index(position in a string)
// let str="hello world";
// console.log(str.charAt(1));
// -----------
// --------The charcodeAt() method 
// the charcodeAt() method returns the unicode of the character at a specified index
// in a string:
// the method return aUTF-16 code(an interger between 0 and 65535)
// The Unicode Stander provides a unique number for every character,
//  no matter the platform, device, application, or language. UTF-8 is a propuler
// unicode encoding which has 88-bit code units.
// var str ="Hello world";
// console.log(str.charCodeAt(0))
// --------













// ----- challange time----------
// Return the Unicode of the last character in a string
// let arr="hello world";
// let newarr=arr.length-1;
// console.log(arr.charCodeAt(newarr));
// let newarr=arr.toUpperCase();
// let newarr2=arr.toLowerCase();
// console.log(newarr2);
// console.log(newarr);

// ------- the concet() mathod ---
// let fname='debajyoti ';
// let lname='panda';
// console.log(fname+lname)
// console.log(fname.concat(lname));
// console.log(fname.concat(" ",lname));

// ---- string.trim()
// The trim() method removes whitespace from both sides of a string

// let str="           hello world                "
// console.log(str.trim());


// ----- converting a string to an array ----------
// A string can be converted to an array with the spilt() method

var txt="a,b,c,d,e";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));
