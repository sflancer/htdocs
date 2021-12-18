document.querySelector("img").maxWidthwidth;
var newWidth = document.querySelector("img").style.maxWidth = "40%";
console.log(newWidth);

// var hello;
// var returnedvalue = () => {
//    return document.querySelector("form#actio");
//    console.log(document.querySelector("#lname").value);
// }
// console.log(document.querySelector("#demo").innerHTML = returnedvalue());
// document.querySelector("#fname").innerHTML = returnedvalue();

// let calc = t => t + 3.14 * 34 + 5;
// let returened = calc(5);
// console.log(returened + 2);


let chaNgeVh = document.querySelector('#secConT');
console.log(chaNgeVh); 

const replace = function(callable){
    document.querySelector('#fname').defaultValue =callable();;
    console.log(`Came Back`);
}

let getLastNameValue = function(){
    console.log(`in here getlast Name Value`)
    return document.querySelector('#lname').defaultValue;
}
replace(getLastNameValue);

let formButton =document.querySelector('#formBut');
console.log(formButton);
formButton.onchange =function(){console.log('it was on change'});