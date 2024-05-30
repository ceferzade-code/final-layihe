let list = JSON.parse(localStorage.getItem("joblist"));
let pace = Math.ceil(list.length / 3);
document.querySelector(".paceNumber").innerText = "/" + pace;
let x = [];
let z = [];
let y = 3;
let i = 0;
for (; i < list.length; i++) {
  if (i < y) {
    x.push(list[i]);
  }

  if (i + 1 == y) {
    z.push(x);
    y += 3;

    x = [];
  }
  if (x.length) {
    z.push(x);
    // console.log(z);
  }
}
// console.log(z[3]);
// console.log(z[2]);
let q = 0;
// console.log(tt);
let renderHtml = "";
for (let i = 0; i < z[q]?.length; i++) {
  renderHtml += ` <a class="colorBlack" href="./details.html#${z[q][i].id}">
  <div class="divImg">
    <img src="${z[q][i].companyLog}" alt="error" />
  </div>
  
  <div class="workName">
    <h2> ${z[q][i].workName}</h2>
    <p> ${z[q][i].company}</p>
    <br>
    <p>
      <i class="fa-solid fa-location-dot"></i> ${z[q][i].jobType}
    </p>
    <p>
      <i class="fa-solid fa-earth-americas"></i> ${z[q][i].location}
    </p>
    <p>
      <i class="fa-solid fa-money-bill"></i> ${z[q][i].salary}
      <i class="fa-solid fa-manat-sign"></i>
    </p>
  </div>
  <div class="workTime">
    <p> ${z[q][i].workType}</p>
   
    <p class = "elanTime"><i class="fa-regular fa-clock"></i> 3 
    minuts ago</p>
  </div>
  </a>`;
}

document.querySelector(".workElan").innerHTML = renderHtml;

function paceRightFunc() {
  // e.preventDefault();
  q = q + 3;
  let i = q;
  
}
