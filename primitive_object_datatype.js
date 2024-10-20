// nn ss bb u  ---> primitevs datatypes in js
let a = null;
let b = 365;
let c = Symbol("I'm a nice symbol");
let d = "riti";
let e = true;
let f = BigInt(567) + BigInt(3);
let g = undefined;

console.log (a,b,c,d,e,f,g);
console.log (typeof d);
console.log (typeof e);
console.log (typeof f);


// objects --> non primitevs datatypes in js

const item =
{
  "riti": true,
  "shubh": false,
  "lovish": 67,
  "rohan": undefined
}

console.log (item["riti"]);