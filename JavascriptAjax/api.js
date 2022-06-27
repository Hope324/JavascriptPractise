var apiCall = new XMLHttpRequest();

apiCall.open("GET", "https://jsonplaceholder.typicode.com/users");
apiCall.send();
apiCall.onload = function () {
  var responseFromServer = this.responseText;
  console.log(typeof responseFromServer);
  var useItInJSResponse = JSON.parse(responseFromServer);
  // JSON.stringify()
  console.log(useItInJSResponse);
  
  renderDataFromServer(useItInJSResponse);
};
var divparent=document.querySelector("#divparent");
function renderDataFromServer(data) {
    data.forEach(function (val) { 
      var divchild=document.createElement("div");
      divchild.classList.add("divchild");
    divparent.appendChild(divchild);
      var p = document.createElement("p");
      p.textContent = "Name:"+' '+val.name;
      divchild.appendChild(p);
      var p2 = document.createElement("p");
      p2.textContent = "Address:"+' '+val.address.street;
      divchild.appendChild(p2);
      var p3 = document.createElement("p");
      p3.textContent = val.address.suite;
      p3.classList.add("p3");
      divchild.appendChild(p3);
      var p4 = document.createElement("p");
      p4.textContent = val.address.city;
      divchild.appendChild(p4);
      var p5 = document.createElement("p");
      p5.textContent = val.address.zipcode;
      divchild.appendChild(p5);
      var p6 = document.createElement("p");
      p6.textContent = "Email:"+' '+val.email;
      divchild.appendChild(p6);
      var p7 = document.createElement("p");
      p7.textContent = "Website:"+' '+val.website;
      divchild.appendChild(p7);


    });
  }

  var userData = {
    name: "Demo Post",
    email: "234",
    website: "Hope123"
  };
  function postDataToServer(data) {
    var apiCall = new XMLHttpRequest();
  
    apiCall.open("POST", "https://jsonplaceholder.typicode.com/posts");
    apiCall.send(JSON.stringify(userData));
    apiCall.onload = function () {
      var responseFromServer = this.responseText;
      alert(responseFromServer);
    };
  }
  postDataToServer(userData);
