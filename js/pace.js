let list = JSON.parse(localStorage.getItem("joblist"));
let pace = parseInt(list.length / 5);
document.querySelector(".paceNumber").innerText = "/" + (1 + pace);
let x = [];
let y = 5;
let i = 0;
for (; i < list.length; i++) {
  if (i < y) {
    x.push(list[i]);
  }
  
}
if (i = y) {
  y += 5;
}
// y += 5;
let z = [];
z.push(x);
x = [];
console.log(z);
