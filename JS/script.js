function myFunction() {
    var x = document.getElementById("RespNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  } 