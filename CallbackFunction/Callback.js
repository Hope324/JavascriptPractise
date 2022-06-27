function callmewhentimeoutcompleted()
{
console.log("I am processing 4");
console.log(data);
}

var data=0;
console.log("i am processing 1")
setTimeout(function()
{
console.log("I am processing 3");
data=100;
},0)

setTimeout(callmewhentimeoutcompleted,5000);
console.log("I am processing 2");