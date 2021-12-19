var path = require("path");

function change_to_kuw() {
  document.getElementById("filter_name").innerText = "Kuwa";
}

function change_to_glg() {
  document.getElementById("filter_name").innerText = "glg";
}

function change_to_mean() {
  document.getElementById("filter_name").innerText = "mean";
}

function filter_img() {
  if (document.getElementById("filter_name").innerText == "Kuwa") {
    filter_with_kuw();
  } else if (document.getElementById("filter_name").innerText == "glg") {
    filter_with_glg();
  } else if (document.getElementById("filter_name").innerText == "mean") {
    filter_with_mean();
  }

  function filter_with_kuw() {
    function filter() {
      var imgName = document.getElementById("imgname").value;
      // Show preview of origin img
      let img_url = path.join(__dirname, "images", imgName);
      document.getElementById("img-prev-div").setAttribute("src", img_url);
      // Call the func of kuw python script
      var options = {
        scriptPath: path.join(__dirname, "../engine/"),
        args: [imgName],
      };
      let pyshell = new PythonShell("kuw_filter.py", options);
      pyshell.on("message", function (message) {
        swal(message);
      });
    }

    function show() {
      var imgName = document.getElementById("imgname").value;
      after_filter_img_name = "after_kuwa_filter_" + imgName;
      let img_after_filter_url = path.join(
        __dirname,
        "images",
        after_filter_img_name
      );
      console.log(img_after_filter_url);

      console.log("waiting for filter");
      document
        .getElementById("img-filter-div")
        .setAttribute("src", img_after_filter_url);
      document.getElementById("imgname").value = "";
    }

    filter();
    show();
  }

  function filter_with_glg() {
    function filter() {
      var imgName = document.getElementById("imgname").value;
      // Show preview of origin img
      let img_url = path.join(__dirname, "images", imgName);
      document.getElementById("img-prev-div").setAttribute("src", img_url);

      // Call the func of kuw python script
      var options = {
        scriptPath: path.join(__dirname, "../engine/"),
        args: [imgName],
      };
      let pyshell = new PythonShell("FGLG.py", options);
      pyshell.on("message", function (message) {
        swal(message);
      });
    }

    function show() {
      var imgName = document.getElementById("imgname").value;
      after_filter_img_name = "after_glg_filter_" + imgName;
      let img_after_filter_url = path.join(
        __dirname,
        "images",
        after_filter_img_name
      );

      console.log("waiting for filter");
      document
        .getElementById("img-filter-div")
        .setAttribute("src", img_after_filter_url);
      document.getElementById("imgname").value = "";
    }

    filter();
    show();
  }

  function filter_with_mean() {
    function filter() {
      var imgName = document.getElementById("imgname").value;
      // Show preview of origin img
      let img_url = path.join(__dirname, "images", imgName);
      document.getElementById("img-prev-div").setAttribute("src", img_url);
      // Call the func of kuw python script
      var options = {
        scriptPath: path.join(__dirname, "../engine/"),
        args: [imgName],
      };
      let pyshell = new PythonShell("mean_filter.py", options);
      pyshell.on("message", function (message) {
        swal(message);
      });
    }

    function show() {
      var imgName = document.getElementById("imgname").value;
      after_filter_img_name = "after_mean_filter_" + imgName;
      let img_after_filter_url = path.join(
        __dirname,
        "images",
        after_filter_img_name
      );

      console.log("waiting for filter");
      document
        .getElementById("img-filter-div")
        .setAttribute("src", img_after_filter_url);
      document.getElementById("imgname").value = "";
    }

    filter();
    show();
  }
}
