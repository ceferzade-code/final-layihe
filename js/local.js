function createSubmit(e) {
  e.preventDefault();

  let joblis = getLocaleData("joblist");
  let maxId = 0;

  for (let i = 0; i < joblis.length; i++) {
    if (joblis[i].id > maxId) {
      maxId = joblis[i].id;
    }
  }

  let workNameInp = document.querySelector("#workName");
  let workTypeInp = document.querySelector("#workType");
  let companyInp = document.querySelector("#company");
  let jobTypeInp = document.querySelector("#jobType");
  let locationInp = document.querySelector("#location");
  let salaryInp = document.querySelector("#salary");
  let companyLogInp = document.querySelector("#companyLog");
  let textAreaInp = document.querySelector("#textArea");
  let applicationInp = document.querySelector(".application");

  let x = {
    id: maxId + 1,
    workName: workNameInp.value,
    workType: workTypeInp.value,
    company: companyInp.value,
    jobType: jobTypeInp.value,
    location: locationInp.value,
    salary: salaryInp.value,
    companyLog: companyLogInp.value,
    textarea: textAreaInp.value,
    application: applicationInp.value,
  };

  if (workNameInp.value.trim() == "") {
    workNameInp.insertAdjacentHTML("afterend", "<p>Ish adini qeyd edin !</p>");
  }

  if (
    workTypeInp.value.trim() == "" ||
    workTypeInp.value.trim() == "Secim edin"
  ) {
    workTypeInp.insertAdjacentHTML("afterend", "<p>ish novun sechin !</p>");
  }
  if (companyInp.value.trim() == "") {
    companyInp.insertAdjacentHTML("afterend", "<p>Shirket sechin !</p>");
  }
  if (
    jobTypeInp.value.trim() == "" ||
    jobTypeInp.value.trim() == "Secim edin"
  ) {
    jobTypeInp.insertAdjacentHTML("afterend", "<p>Ishin tipin sechin !</p>");

    console.log();
  }
  if (locationInp.value.trim() == "") {
    locationInp.insertAdjacentHTML("afterend", "<p>Sheher sechin !</p>");
  }
  if (salaryInp.value.trim() == "") {
    salaryInp.insertAdjacentHTML("afterend", "<p>Maash sechin !</p>");
  }
  if (companyLogInp.value.trim() == "") {
    companyLogInp.insertAdjacentHTML(
      "afterend",
      "<p>Shirket loqosu daxil edin!</p>"
    );
  }
  if (textAreaInp.value.trim() == "") {
    textAreaInp.insertAdjacentHTML(
      "afterend",
      "<p>Umumi melumatlar qeyd edin !</p>"
    );
  }
  if (applicationInp.value.trim() == "") {
    applicationInp.insertAdjacentHTML("afterend", "<p>Mail qeyd edin !</p>");
  }

  // joblis.push(x);

  if (
    workNameInp.value.trim() != "" &&
    workTypeInp.value.trim() != "" &&
    companyInp.value.trim() != "" &&
    jobTypeInp.value.trim() != "" &&
    locationInp.value.trim() != "" &&
    salaryInp.value.trim() != "" &&
    companyLogInp.value.trim() != "" &&
    textAreaInp.value.trim() != "" &&
    applicationInp.value.trim() != ""
  ) {
    // alert("Butun detallari qeyd edin");\

    joblis.push(x);

    localStorage.setItem("joblist", JSON.stringify(joblis));

    workNameInp.value = "";
    workTypeInp.value = "";
    companyInp.value = "";
    jobTypeInp.value = "";
    locationInp.value = "";
    salaryInp.value = "";
    companyLogInp.value = "";
    textAreaInp.value = "";
    applicationInp.value = "";
  }

  // console.log(joblis);
}
