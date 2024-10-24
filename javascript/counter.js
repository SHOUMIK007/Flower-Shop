counter
let upto = 0;
let counts = setInterval(updated,1000);
function updated() {
  let count = document.getElementById("counter");
  count.innerHTML = ++upto;
  if (upto === 3) {
    clearInterval(counts);
  }
}
let upto1 = 0;
let counts1 = setInterval(updated1,1000);
function updated1() {
  let count1 = document.getElementById("counter1");
  count1.innerHTML = ++upto1;
  if (upto1 === 5) {
    clearInterval(counts1);
  }
}
let upto2 = 0;
let counts2 = setInterval(updated2,1000);
function updated2() {
  let count2 = document.getElementById("counter2");
  count2.innerHTML = ++upto2;
  if (upto2 === 7) {
    clearInterval(counts2);
  }
}
let upto3= 0;
let counts3 = setInterval(updated3, 1000);
function updated3() {
  let count3 = document.getElementById("counter3");
  count3.innerHTML = ++upto3;
  if (upto3 === 10) {
    clearInterval(counts3);
  }
}