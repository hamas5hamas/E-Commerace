/*
console.time("Your time take time");
document.write("Hello world");
console.log(45+5);
console.log("Hello world")
console.log(true);
console.log([32,12,23]);
console.log({hamas:'this', marks:34});
console.table({hamas:'this', marks:56});
console.warn("This is warning");
//console.clear();
console.timeEnd("Your time take time");
console.assert(226<123, 'Age greate then 123 is not possible');
console.error("This is an error");
*/
/*
var name="hamas";
name="hira";
var namae;
var marks=32;
const varName="hamas tanveer";
const arr1=[12,13,14];
arr1.push(15);
console.log(name,namae,marks,varName,arr1);
{
    let marks=45;
    marks=100;
    console.log(marks);
}
*/

/*
//premitive data types
let name = "Hamas";
console.log("My name is " + name);
console.log("Data type is " + (typeof name));
let isdrive=true;
console.log("data type is "+(typeof isdrive));
let nullvle=null;
console.log("Data type is "+(typeof nullvle));

//Reference data type
let array=[1,2,34,5,false,"asafifs"];
console.log("Dta type is "+(typeof array));

let stMarks = {
    hamas: 32,
    hanan: 21,
    hira: 87
};
console.log("Data type is "+typeof(stMarks));
function findnamee(){

}
console.log("Data type is "+typeof(findnamee));

let data = new Date();
console.log("Dta type is "+(typeof data));
*/

/*
let value=23;
value=String(76);
console.log(value, (typeof value));
let myvar=true;
myvar=String(true);
console.log(myvar, (typeof myvar));
let Data = String(new Date());
console.log(Data, (typeof Data));
let arr=([1,2,4,8]);
console.log(arr.length, (typeof arr));

let i=23;
console.log(i.toString());

let stri="yeREUW";
stri=Number("ye7");
stri=Number(false);
console.log(stri, (typeof stri));
let num = parseFloat("12.098");
//let num = parseInt("12.098");
console.log(num.toFixed(3), (typeof num)); 
*/


/*
//const name1 = "Hamas";
//const name2 = "Hanan";
//console.log(name1+" "+name2);
let html;
html = "<h1>Top best Website to Learn</h1>" +
" <p>my name is hamas </p>";
//console.log(html);
html=html.concat(" This is best one tutorial");
//console.log(html);
//console.log(html.length)
//console.log(html.toLowerCase());
//console.log(html.toUpperCase());
//console.log(html[9]);
console.log(html.indexOf("Learn"));
console.log(html.lastIndexOf(">"));
console.log(html.charAt(9));
console.log(html.endsWith("tutorial"));
console.log(html.includes("best"));
console.log(html.substring(3,7));
console.log(html.slice(-5));
console.log(html.slice(4,10));
console.log(html.split(" "));
console.log(html.replace("my","hamas"));
let javascript = "hamas";
let css = "tanveer";
let combine = `Hello 
<h1>This is my first heading</h1>
<p>My first name is ${javascript} and second name is ${css}`;
document.body.innerHTML = combine;

let marks = [12,13,14,15,16,17];

const fruit = ["red", "green", "blue"];
const mixed = ["asdbf", 3, [2,3,4]];
const arr = new Array(23,345,"orangee");
console.log(marks);
console.log(arr);
console.log(fruit[2]);
console.log(marks.length);
console.log(Array.isArray(marks));
arr[0] = "hamas";
console.log(arr);
let arreee = arr[0];
console.log("firstelement :", arreee);
let value = marks.indexOf(15);
console.log(value);
marks.push(12345);
console.log(marks);
marks.unshift(2345678);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(1,2);
console.log(marks);
marks.reverse();
console.log(marks);

let marks2 = [4,5,6,7];
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    name : "Hamas",
    roll : [2,0,0,4,1,5],
    class : true
}
console.log(myobj);
console.log(myobj.roll);
*/

/*
let name = 'hamas';
let name2 ='najmaprveen'
console.log(`Good morning ${name} wellcome to our page please wait for few minutes`);

function myfunction(vari, thank){
    
console.log(`Good morning ${vari} wellcome to our page please wait for few minutes ${thank}`);
return vari
};

let val = myfunction(name2);
console.log(val, '');

const myobj = {
    name : 'hira',
    rollno : '200415',
    class : 'bscs',
    game : function(){
        return 'hello world';
    } 
}
console.log(myobj.game());
*/


//let a = window;
//window.alert("Hello world");
//console.log(a);
//a = prompt("This will distroy your computer");
//console.log(a);
//a = confirm("Are you shure to want this page delete");
//
// a = window.document;
// a = window.innerWidth;
// a = window.innerHeight; 
// a = scrolly;
// a = location;
// a = location.toString();
// a = window.history;
// a = history.length;
// a = history.go(-2);
// a = document.all;
// a = document.body;
// a = document.links;
// console.log(a);


// element = element.className;
// element = element.childNodes;
// element = element.parentNode;  
// element.style.color = 'red';
// element.innerHTML = 'Hmas is good boy';
let element = document.getElementById('row');
element.innerText ='javascript is easy to learn';
console.log(element.innerText);