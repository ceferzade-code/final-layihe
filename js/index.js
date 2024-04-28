function renderJobs(filter) {
  let jobList = JSON.parse(localStorage.getItem("joblist"));

  // if (filter.workType) {
  //   jobList = jobList.filter(() => {});
  // }

  // let lang = localStorage.getItem("lang");
  // console.log(jobList);
  let renderHtml = "";

  for (let i = 0; i < jobList.length; i++) {
    renderHtml += ` <a href="./details.html#${jobList[i].id}">
<div class="divImg">
  <img src="${jobList[i].companyLog}" alt="error" />
</div>

<div class="workName">
  <h2> ${jobList[i].workName}</h2>
  <p> ${jobList[i].company}</p>
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
  <div>
  <p id = "deletList" onclick="delFunction()"><i class="fa-solid fa-trash-can"></i></p>
  <p><i class="fa-solid fa-pen-to-square"></i></p>
</div>
  <p><i class="fa-regular fa-clock"></i> 3 minuts ago</p>
</div>
</a>`;
  }

  document.querySelector(".workElan").innerHTML = renderHtml;
}
function delFunction() {
  
}


renderJobs({});




// function x() {
//   let filter = {};

//   if (true) {
//     filter.workType = "value";
//   }

//   renderJobs(filter);
// }

// function getJobTypeName(id, lang) {
//   let jobTypeList = getLocaleData("jobTypeList");
//   for (let i = 0; i < jobTypeList.length; i++) {
//     if (jobTypeList[i].id == id) {
//       return jobTypeList[i].name[lang];
//     }
//   }
//   return "Teyin olunmayib";
// }

{
  /* <a href="#">
          <div class="divImg">
            <img src="bankR.jpg" alt="error" />
          </div>
          <div class="workName">
            <h2>Backend developer (Java) - Aparıcı mütəxəsis</h2>
            <p>Bank Respublika ASC</p>
            <p>
              <i class="fa-solid fa-location-dot"></i> Baku, Baki, Azerbaijan
            </p>
            <p>
              <i class="fa-solid fa-earth-americas"></i> Baku, Baki, Azerbaijan
            </p>
            <p>
              <i class="fa-solid fa-money-bill"></i> 0,00
              <i class="fa-solid fa-manat-sign"></i>
            </p>
          </div>
          <div class="workTime">
            <p>Tam iş vaxtı</p>
          </div>
</a> */
}

// let y = [
//   {
//     id: 1,
//     name: "Yerində",
//   },
//   {
//     id: 2,
//     name: "Remote",
//   },
//   {
//     id: 3,
//     name: "Hybrid",
//   },
// ];
