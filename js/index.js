function renderJobs(filter) {
  // e.preventDefault();
  let jobList = JSON.parse(localStorage.getItem("joblist") || '[]');

  // if (filter.workType) {
  //   jobList = jobList.filter(() => {});
  // }

  // let lang = localStorage.getItem("lang");
  // console.log(jobList);
  let renderHtml = "";

  for (let i = 0; i < jobList.length; i++) {
    renderHtml += `<a class="colorBlack xx" href="./details.html#${jobList[i].id}"  >
<div class="divImg">
  <img src="${jobList[i].companyLog}" alt="error" />
</div>

<div class="workName colorBlack">
  <h2> ${jobList[i].workName}</h2>
  <p> ${jobList[i].company}</p>
  <br>
  <p>
    <i class="fa-solid fa-location-dot"></i> ${jobList[i].jobType}
  </p>
  <p>
    <i class="fa-solid fa-earth-americas"></i> ${jobList[i].location}
  </p>
  <p>
    <i class="fa-solid fa-money-bill"></i> ${jobList[i].salary}
    <i class="fa-solid fa-manat-sign"></i>
  </p>
</div>
<div class="workTime">
  <p> ${jobList[i].workType}</p>
 
  <p class = "elanTime"><i class="fa-regular fa-clock"></i> 3 
  minuts ago</p>
</div>
</a>`;
  }

  document.querySelector(".workElan").innerHTML = renderHtml;
}
renderJobs({});
