let obj = isHashExist();
if (obj) {
  let detailsHtml = "";
  detailsHtml = `
  <div class = "detailsDiv">
         <div class="divImg">
           <img src="${obj.companyLog}" alt="error" />
         </div>
         <div class="workName">
           <h2>${obj.workName}</h2>
           <p>${obj.company}</p>
           <p><i class="fa-solid fa-briefcase"></i> ${obj.workType}</p>
           <p><i class="fa-solid fa-location-dot"></i> ${obj.jobType}</p>
           <p>
             <i class="fa-solid fa-earth-americas"></i> ${obj.location}
           </p>
           <p>
             <i class="fa-solid fa-money-bill"></i> ${obj.salary}
             <i class="fa-solid fa-manat-sign"></i>
           </p>
         </div>
         <div class="workTime">
           <a href="mailto:${obj.application}">Müraciət et</a>
           <div>
          <p id = "deletList" onclick="delFunction(event)"><i class="fa-solid fa-trash-can"></i></p>
          <a href="edit.html#${obj.id}"><i class="fa-solid fa-pen-to-square"></i></a>
          </div>
         </div>
       </div>
       <p>
       ${obj.textarea}
       </p>`;

  document.querySelector(".workElan").innerHTML = detailsHtml;
}

function isHashExist() {
  let hash = location.hash;
  let id = null;

  if (hash.length > 1 && hash.includes("#")) {
    id = Number(hash.slice(1, hash.length));
  }

  if (id) {
    let list = getLocaleData("joblist");
    // console.log(list);
    let foundJob = null;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id == id) {
        foundJob = list[i];

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
  let list = JSON.parse(localStorage.getItem("joblist"));

  for (let i = 0; i < list.length; i++) {
    if (list[i].id == obj.id) {
      console.log(list[i].id);
      list[i].remove;
    
    }
   

  }
  console.log(list);
}
// console.log(obj.id);
// console.log(getLocaleData("joblist"));
// console.log(obj);
