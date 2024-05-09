function createSubmit(e) {
  e.preventDefault();

  let workNameInp = document.querySelector("#workName");
  let joblis = getLocaleData("joblist");
  let maxId = 0;

  for (let i = 0; i < joblis.length; i++) {
    if (joblis[i].id > maxId) {
      maxId = joblis[i].id;
    }
  }

  let x = {
    id: maxId + 1,
    workName: workNameInp.value,
    workType: document.querySelector("#workType").value,
    company: document.querySelector("#company").value,
    jobType: document.querySelector("#jobType").value,
    location: document.querySelector("#location").value,
    salary: document.querySelector("#salary").value,
    companyLog: document.querySelector("#companyLog").value,
    textarea: document.querySelector("#textArea").value,
    application: document.querySelector(".application").value,
  };

  if (workNameInp.value.trim() == "") {
    workNameInp.after("<p>Ish adini qeyd edin !</p>");
    
  }

  if (
    document.querySelector("#workType").value.trim() == "" ||
    document.querySelector("#workType").value.trim() == "Secim edin"
  ) {
    document.querySelector("#workType").after("ish novun sechin !");
  }
  if (document.querySelector("#company").value.trim() == "") {
    document.querySelector("#company").after("Shirket sechin !");
  }
  if (
    document.querySelector("#jobType").value.trim() == "" ||
    document.querySelector("#jobType").value.trim() == "Secim edin"
  ) {
    document.querySelector("#jobType").after("Ishin tipin sechin !");
  }
  if (document.querySelector("#location").value.trim() == "") {
    document.querySelector("#location").after("Sheher sechin !");

  }
  if (document.querySelector("#salary").value.trim() == "") {
    document.querySelector("#salary").after(" Maash sechin !");
  }
  if (document.querySelector("#companyLog").value.trim() == "") {
    document.querySelector("#companyLog").after("Shirket loqosu daxil edin!");
  }
  if (document.querySelector("#textArea").value.trim() == "") {
    document.querySelector("#textArea").after("Umumi melumatlar qeyd edin");
  }
  if (document.querySelector(".application").value.trim() == "") {
    document.querySelector(".application").after("Mail qeyd edin !");
  }

  // joblis.push(x);

  if (
    workNameInp.value.trim() != "" &&
    document.querySelector("#workType").value.trim() != "" &&
    document.querySelector("#company").value.trim()!= "" &&
    document.querySelector("#jobType").value.trim() != "" &&
    document.querySelector("#location").value.trim() != "" &&
    document.querySelector("#salary").value.trim() != "" &&
    document.querySelector("#companyLog").value.trim()!= "" &&
    document.querySelector("#textArea").value.trim() != "" &&
    document.querySelector(".application").value.trim() != "" &&
  ) {
    // alert("Butun detallari qeyd edin");\

    joblis.push(x);
  } 

  console.log(joblis);

  localStorage.setItem("joblist", JSON.stringify(joblis));

  workNameInp.value = "";
  document.querySelector("#workType").value = "";
  document.querySelector("#company").value = "";
  document.querySelector("#jobType").value = "";
  document.querySelector("#location").value = "";
  document.querySelector("#salary").value = "";
  document.querySelector("#companyLog").value = "";
  document.querySelector("#textArea").value = "";
  document.querySelector(".application").value = "";
}
