function validatelogin ( ) {
 //document.getElementById(loginfrm).submit();
 var username = document.getElementById("email").val;
    //username = username
    //password = password
    console.log (email.submit, password.submit);
  }

// getelementbyID value - specific parameter, not the whole result!!!

  // Storing data in JSON (sign up)
//myObj = { "name":"John", "age":31, "city":"New York" };
//myJSON = JSON.stringify(myObj);
//localStorage.setItem("testJSON", myJSON);

//direct to new page on successful login
function contentpage() {
window.location.assign("http://127.0.0.1:5500/categories.html")}