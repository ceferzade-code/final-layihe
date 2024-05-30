function searchSubmit(e) {
  e.preventDefault();

  let jobList = JSON.parse(localStorage.getItem("joblist"));
  let searchCompanyInp = document.querySelector("#searchCompany");
  let countryInp = document.querySelector("#country");
  let operatingInp = document.querySelector("#operating");
  let checkboxInp = document.querySelector("#checkbox");
  let renderHtml = "";
  let x = "";
  for (let i = 0; i < jobList.length; i++) {
    if (
      jobList[i].workName
        .trim()
        .toLowerCase()
        .includes(searchCompanyInp.value.trim().toLowerCase()) ||
      x == searchCompanyInp.value.trim()
    ) {
      //   console.log(jobList[i].workType);
      if (
        jobList[i].workType
          .trim()
          .toLowerCase()
          .includes(operatingInp.value.trim().toLowerCase()) ||
        "Bütün iş rejimləri" == operatingInp.value.trim()
      ) {
        if (
          jobList[i].location
            .trim()
            .toLowerCase()
            .includes(countryInp.value.trim().toLowerCase()) ||
          x == countryInp.value.trim()
        ) {
          if (
            checkboxInp.checked == true &&
            jobList[i].jobType.trim() == "Remote"
          ) {
            // console.log(checkboxInp.value.trim());
            // for (let i = 0; i < jobList.length; i++) {

            renderHtml += ` <a class="colorBlack" href="./details.html#${jobList[i].id}">
        <div class="divImg">
          <img src="${jobList[i].companyLog}" alt="error" />
        </div>
        
        <div class="workName">
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
          } else if (checkboxInp.checked == false) {
            renderHtml += ` <a class="colorBlack" href="./details.html#${jobList[i].id}">
            <div class="divImg">
              <img src="${jobList[i].companyLog}" alt="error" />
            </div>
            
            <div class="workName">
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
        }
        // else {
        //   renderHtml += `<div class="noCity">
        //     <h2> Təəssuf ki ${searchCompanyInp.value.trim()}, ${countryInp.value.trim()} şəhərdə  tapilmadi...</h2>
        //   </div>`;
        //   break;
        // }
      }
    }
    // else {
    //   renderHtml += `<div class="noCity">
    //         <h2> Təəssuf ki ${searchCompanyInp.value.trim()} iş elani tapilmadi...</h2>
    //       </div>`;

    //   break;
    // }
  }
  // renderHtml += `<div class="noCity">
  //         <h2> Təəssuf ki ${searchCompanyInp.value.trim()} iş elani tapilmadi...</h2>
  //       </div>`;
  document.querySelector(".workElan").innerHTML = renderHtml;
}
// }
