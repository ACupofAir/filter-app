var path = require("path")


function filter_with_kuw() {

  var imgname = document.getElementById("imgname").value

  // Show preview of origin img
  let img_url = path.join(__dirname, 'images', imgname)
  document.getElementById('img-prev-div').setAttribute('src', img_url)

  // Call the func of kuw python script
  var options = {
    scriptPath: path.join(__dirname, '../engine/'),
    args: [imgname]
  }

  let pyshell = new PythonShell('kuw_filter.py', options);


  pyshell.on('message', function (message) {
    swal(message);
  })

  // After filter img show:
  after_filter_img_name = "after_filter_" + imgname
  let img_after_filter_url = path.join(__dirname, 'images', after_filter_img_name)
  document.getElementById('img-filter-div').setAttribute('src', img_after_filter_url)

  document.getElementById("imgname").value = "";
}