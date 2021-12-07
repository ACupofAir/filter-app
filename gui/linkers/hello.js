// let {PythonShell} = require('python-shell')
// var path = require("path");

// function get_username() {

//   var username = document.getElementById("username").value


//   var options = {
//     scriptPath : path.join(__dirname, '../../engine/'),
//     args : [username]
//   }

//   let hello = new PythonShell('hello.py', options);

//   hello.on('message', function(message) {
//     swal(message);
//   })

//   document.getElementById("username").value = "FUCK U";
// }
let {PythonShell} = require('python-shell')
var path = require("path")


function get_username() {

  var username = document.getElementById("username").value
  
  var options = {
    scriptPath : path.join(__dirname, '../engine/'),
    args : [username]
  }

  let pyshell = new PythonShell('hello.py', options);


  pyshell.on('message', function(message) {
    swal(message);
  })
  document.getElementById("username").value = "";
}
