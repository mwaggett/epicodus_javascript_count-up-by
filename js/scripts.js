
var countUpBy = function(increment, max) {
  var output = [];
  for (var i = increment; i <= max; i += increment) {
    output.push(i);
  }
  return output;
};

$(document).ready(function() {
  $("form#getNumber").submit(function(event) {
    var max = parseInt($("input#number").val());
    var increment = parseInt($("input#multiple").val());

    var result = countUpBy(increment, max);

    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
