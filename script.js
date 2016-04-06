$( document ).ready(function() {
  var timestamp = Date.now();
  setInterval(function () {
    var time = Date.now() - timestamp;
    var watts = 26;
    var stars = 20;
    var ms = -3
    var total = ""
    for (var i = 0; i < (watts + stars + ms); i++) {
      total += Math.floor(Math.random() * 10);
    };
    total = time + total;
    reverse_total = total.split("").reverse().join("");
    var total = "";
    for (var i = 0; i < reverse_total.length; i++) {
      total += reverse_total[i];
      if (i % 3 == 2 && i != reverse_total.length-1) {
        total += ",";
      }
    };
    total = total.split("").reverse().join("");
    $("#number").text(total);
  }, 16);
});
