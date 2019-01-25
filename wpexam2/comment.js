function validateUser(){
var username = document.getElementById('name').value;
var password = document.getElementById('password').value;
var comment = document.getElementById('comments').value;
//  if (password == "" || username == "") {
//      alert("please enter empty field")
//  }
//  else {
    if (password == "msit1234") {
        alert("comment successed");
        var comment = [];
        var user = [];
        comment = document.getElementById('comments').value;
        user = document.getElementById('name').value;
    } else {
        // console.log("Re-enter password");
        document.write("Re-enter password");
    }

 comment.toString();

}