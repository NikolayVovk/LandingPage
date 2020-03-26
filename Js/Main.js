let add = document.getElementById('add');
let circle = document.getElementById('circle');

let num = 0;
let addingF = setInterval(() => {
  console.log(1);
  num += 1;
  add.innerHTML = num + "%";
  circle.style.strokeDasharray = `${num+10},200`;
  if (num==62) {
   clearInterval(addingF);
  }
}, 20);
