var obj=["A" ,"B","C","D"] ;
obj[0]="Z";
obj[7]="U";
console.log(obj);
 var family=["a","b","c"];
 console.log(family);
//modifying object
var phones={
    name:"samsung",
    prize:30000,
}
console.log(phones);
phones.prize=50000;
console.log(phones);
//tostring
var a=100;
console.log(a.toString());
var a1=a.toString();
console.log(typeof a1);
//ParseInt
var a=958.06552;
console.log(parseInt(a));
//parsefloat(wont work)
var a=958;
console.log(parseFloat(a));
//isInfinite
var a=3;//if num returns true
console.log(isFinite(a));
var a="u";// false
console.log(isFinite(a));
var a=3;//if num returns true
console.log(typeof isFinite(a));
var a=[1,2];
console.log(typeof a)
//to fixed represents number that exists before decimal
var a=111.11;
console.log(a.toFixed());
console.log(a.toFixed(10));
//to precision  
var a=877.532;
console.log(a.toPrecision(5));
//exponential
let x=5.56789;
let n=x.toExponential();
console.log(n);
let y=5.56789;
let p=y.toExponential(3);
console.log(p);
//localestring
let num=10000;
let text=num.toLocaleString();
console.log(text);
let num1=10000;
let text1=num1.toLocaleString("fi-FI");
console.log(text1);
let num2=1000000000;
let text2=num2.toLocaleString();
console.log(text2);