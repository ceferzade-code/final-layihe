function myFunction() {
  let workName = document.querySelector("#workName").value;
  localStorage.setItem("workName", workName);
  let workType = document.querySelector("#workType").value;
  localStorage.setItem("workType", workType);
  let company = document.querySelector("#company").value;
  localStorage.setItem("company", company);
  let jobType = document.querySelector("#jobType").value;
  localStorage.setItem("jobType", jobType);

  let location = document.querySelector("#location").value;
  localStorage.setItem("location", location);
  let salary = document.querySelector("#salary").value;
  localStorage.setItem("salary", salary);

  alert(localStorage.getItem("workName"));
  alert(localStorage.getItem("workType"));
  alert(localStorage.getItem("company"));
  alert(localStorage.getItem("jobType"));
  alert(localStorage.getItem("location"));
  alert(localStorage.getItem("salary"));
}
