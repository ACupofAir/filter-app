var path = require("path")


function filter_with_kuw() {

  var imgname = document.getElementById("imgname").value
  
  var options = {
    scriptPath : path.join(__dirname, '../engine/'),
    args : [imgname]
  }

  let pyshell = new PythonShell('kuw_filter.py', options);


  pyshell.on('message', function(message) {
    swal(message);
  })
  document.getElementById("imgname").value = "";
}