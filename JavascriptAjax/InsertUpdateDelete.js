// var apiCall = new XMLHttpRequest();

// apiCall.open("GET", "https://jsonplaceholder.typicode.com/users");
// //apiCall.send();
// apiCall.onload = function () {
//   var responseFromServer = this.responseText;
//   console.log(typeof responseFromServer);
//   var useItInJSResponse = JSON.parse(responseFromServer);
//   // JSON.stringify()
//   console.log(useItInJSResponse);
//   useItInJSResponse.push({ name: "Laxman" });
//   renderDataFromServer(useItInJSResponse);
// };

// function renderDataFromServer(data) {
//   data.forEach(function (val) {
//     var p = document.createElement("p");
//     p.textContent = val.name;
//     document.body.appendChild(p);
//   });
// }
var userData = {
  title: "Demo Post",
  body: "Demo data",
  userId: "Laxman101"
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
var submitBtn = document.querySelector("#Insert");
submitBtn.addEventListener("click", function () {
  var userId = document.querySelector("#UserID").value;
  var title = document.querySelector("#TitleID").value;
  var body = document.querySelector("#BodyID").value;

  if (checkIfEmpty(userId) && checkIfEmpty(title) && checkIfEmpty(body)) {
    var dataToSend = {
      userId: userId,
      title: title,
      body: body
    };
    postDataToServer(dataToSend);
  } else {
    alert("Data is missing");
  }
});

var userDataToUpdate = {
  title: "Demo Post",
  body: "Demo data",
  userId: "Demo User",
  id: 101
};
function updateDataToServer(data) {
  var apiCall = new XMLHttpRequest();

  apiCall.open("PUT", "https://jsonplaceholder.typicode.com/posts");
  apiCall.send(JSON.stringify(userData));
  apiCall.onload = function () {
    var responseFromServer = this.responseText;
    alert(responseFromServer);
  };
}
var UpdateBtn = document.querySelector("#Update");
UpdateBtn.addEventListener("click", function () {
  var userId = document.querySelector("#UserID").value;
  var title = document.querySelector("#TitleID").value;
  var body = document.querySelector("#BodyID").value;
  var id=document.querySelector("#UserID").value;

  if (checkIfEmpty(userId) && checkIfEmpty(title) && checkIfEmpty(body)) {
    var dataToSend = {
      userId: userId,
      title: title,
      body: body,
      id:id
    };
    updateDataToServer(dataToSend);
  } else {
    alert("Data is missing");
  }
});
updateDataToServer(userDataToUpdate);
postDataToServer(userData);

function checkIfEmpty(value) {
  if (!value) {
    return false;
  } else {
    return true;
  }
}



function deleteDataFromServer(id) {
    var apiCall = new XMLHttpRequest();
  
    apiCall.open("DELETE", "https://jsonplaceholder.typicode.com/posts/" + id);
    apiCall.send();
    apiCall.onload = function () {
      var responseFromServer = this.responseText;
      alert(responseFromServer);
    };
  }
  var DeleteBtn = document.querySelector("#Delete");
DeleteBtn.addEventListener("click", function () {
  var userId = document.querySelector("#UserID").value;
  

  if (checkIfEmpty(userId)) {
    var dataToSend = {
      userId: userId,
      title: title,
      body: body
    };
    deleteDataFromServer(dataToSend);
  } else {
    alert("Data is missing");
  }
});
  deleteDataFromServer(userId);
  