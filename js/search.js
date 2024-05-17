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
      jobList[i].workName.trim() == searchCompanyInp.value.trim() ||
      x == searchCompanyInp.value.trim()
    ) {
      //   console.log(jobList[i].workType);
      if (
        jobList[i].workType.trim() == operatingInp.value.trim() ||
        "Bütün iş rejimləri" == operatingInp.value.trim()
      ) {
        if (
          jobList[i].location.trim() == countryInp.value.trim() ||
          x == countryInp.value.trim()
        ) {
          if (
            checkboxInp.checked == true &&
            jobList[i].jobType.trim() == "Remote"
          ) {
            // console.log(checkboxInp.value.trim());
            // for (let i = 0; i < jobList.length; i++) {

            renderHtml += ` <a href="./details.html#${jobList[i].id}">
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
            renderHtml += ` <a href="./details.html#${jobList[i].id}">
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
        } else {
          let noCity = `<div class="noCity">
            <h1> Təəssuf ki  şəhərdə iş elani tapilmadi...</h1>
          </div>`;
          document.querySelector(".workElan").innerHTML = noCity;
          break;
        }
      }
    }
  }
  document.querySelector(".workElan").innerHTML = renderHtml;
}
// }
