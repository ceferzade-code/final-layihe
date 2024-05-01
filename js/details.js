let obj = isHashExist();
if (obj) {
}

function isHashExist() {
  let hash = location.hash;
  let id = null;

  if (hash.length > 1 && hash.includes("#")) {
    id = Number(hash.slice(1, hash.length));
  }

  if (id) {
    let list = getLocaleData("joblist");
    console.log(list);
    let foundJob = null;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        foundJob = list[i];

        let detailsHtml = "";
        detailsHtml = `
        <div class = "detailsDiv">
               <div class="divImg">
                 <img src="${list[i].companyLog}" alt="error" />
               </div>
               <div class="workName">
                 <h2>${list[i].workName}</h2>
                 <p>${list[i].company}</p>
                 <p><i class="fa-solid fa-briefcase"></i> ${list[i].workType}</p>
                 <p><i class="fa-solid fa-location-dot"></i> ${list[i].jobType}</p>
                 <p>
                   <i class="fa-solid fa-earth-americas"></i> ${list[i].location}
                 </p>
                 <p>
                   <i class="fa-solid fa-money-bill"></i> ${list[i].salary}
                   <i class="fa-solid fa-manat-sign"></i>
                 </p>
               </div>
               <div class="workTime">
                 <a href="mailto:${list[i].application}">Müraciət et</a>
                 <div>
                <p id = "deletList" onclick="delFunction()"><i class="fa-solid fa-trash-can"></i></p>
                 <p><i class="fa-solid fa-pen-to-square"></i></p>
                </div>
               </div>
             </div>
             <p>
             ${list[i].textarea}
             </p>`;

        document.querySelector(".workElan").innerHTML = detailsHtml;
        
        break;
      }
    }
    if (foundJob) {
      return foundJob;
    }
  }

  return null;
}
function delFunction() {
          
}