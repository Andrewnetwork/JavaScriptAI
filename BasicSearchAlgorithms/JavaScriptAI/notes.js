/**
 * Created by andrewribeiro on 3/4/2015.
 */

/* Node.js stuff */
var AndrewLib = require("./AndrewLib.js");
/* END Node.js stuff */

var a = 3;

console.log("Hello world");

var tst = new Array();


console.log(tst["a"] == undefined )

var tst2 = new AndrewLib.ASet();

tst2.add("Andrew");
tst2.add("Jennifer");
tst2.add("Fernando");

console.log(tst2.isIn("Barbara"));

console.log(typeof tst2);
console.log(  tst2 instanceof AndrewLib.ASet);

console.log(tst.length)