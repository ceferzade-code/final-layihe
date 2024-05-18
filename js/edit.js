let list = JSON.parse(localStorage.getItem("joblist"));
let hashIdInp = document.querySelector("#hashId");
let hash = location.hash;
hashIdInp.value = Number(hash.slice(1, hash.length));

let workNameInp = document.querySelector("#workName");
let workTypeInp = document.querySelector("#workType");
let companyInp = document.querySelector("#company");
let jobTypeInp = document.querySelector("#jobType");
let locationInp = document.querySelector("#location");
let salaryInp = document.querySelector("#salary");
let companyLogInp = document.querySelector("#companyLog");
let textAreaInp = document.querySelector("#textArea");
let applicationInp = document.querySelector(".application");

let newList = [];

for (let i = 0; i < list.length; i++) {
  if (list[i].id == hashIdInp.value) {
    workNameInp.value = list[i].workName;
    workTypeInp.value = list[i].workType;
    companyInp.value = list[i].company;
    jobTypeInp.value = list[i].jobType;
    locationInp.value = list[i].location;
    salaryInp.value = list[i].salary;
    companyLogInp.value = list[i].companyLog;
    textAreaInp.value = list[i].textarea;
    applicationInp.value = list[i].application;
  }
}

function editSubmit(e) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id != hashIdInp.value) {
      newList.push(list[i]);
    } else {
      list[i].workName = workNameInp.value;
      list[i].workType = workTypeInp.value;
      list[i].company = companyInp.value;
      list[i].jobType = jobTypeInp.value;
      list[i].location = locationInp.value;
      list[i].salary = salaryInp.value;
      list[i].companyLog = companyLogInp.value;
      list[i].textarea = textAreaInp.value;
      list[i].application = applicationInp.value;
      newList.push(list[i]);
    }
    // if (list[i].id == hashIdInp.value) {
    //   list[i].workName = workNameInp.value;
    // }
  }
  localStorage.setItem("joblist", JSON.stringify(newList));
  location.replace("index.html");
}

// console.log(hashIdInp.value);
// console.log(location.hash);
