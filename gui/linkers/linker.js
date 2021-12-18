var path = require("path")

function change_to_kuw() {
  document.getElementById('filter_name').innerText = 'Kuwa'
}

function filter_img() {
  if (document.getElementById('filter_name').innerText == 'Kuwa') {
    filter_with_kuw()
  }
}

function filter_with_kuw() {
  var imgname = document.getElementById("imgname").value
  function filter() {

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



  }

  async function show() {

    after_filter_img_name = "after_filter_" + imgname
    let img_after_filter_url = path.join(__dirname, 'images', after_filter_img_name)

    console.log("waiting for filter");
    await filter();
    document.getElementById('img-filter-div').setAttribute('src', img_after_filter_url)
    document.getElementById("imgname").value = "";
  }

  filter()
  show()


}
