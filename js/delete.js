function delFunction() {
    let list = JSON.parse(localStorage.getItem("joblist"));
    let newList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id != obj.id) {
        newList.push(list[i]);
  
      }
    }
    // console.log(list);
    // localStorage.setItem("joblist",JSON.stringify("newList"));
    localStorage.setItem("joblist", JSON.stringify(newList));
    console.log(newList);
    location.replace("index.html");
  }