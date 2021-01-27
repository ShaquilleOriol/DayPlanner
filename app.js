$(document).ready(function() {
    $("#presentDay").text(moment());
    $(saveBtn).on("click", function() {
    
      var input = $(this).siblings(description).val();
      var time = $(this).parent().attr(id);

      localStorage.setItem(time, input)
  });

  function colorOverlay(){

    var presentTime = moment().hours();

    $(time-block).each(function() {
      var newTime = parseInt($(this).attr(id).split("-")[1]);

      if (newTime < presentTime) {
        $(this).addClass("past");
      }
      else if (newTime === presentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
  });
}

colorOverlay();

$("#9-hour .description").val(localStorage.getItem('9-hour'));

$("#10-hour .description").val(localStorage.getItem('10-hour'));

$("#11-hour .description").val(localStorage.getItem('11-hour'));

$("#12-hour .description").val(localStorage.getItem('12-hour'));

$("#13-hour .description").val(localStorage.getItem('13-hour'));

$("#14-hour .description").val(localStorage.getItem('14-hour'));

$("#15-hour .description").val(localStorage.getItem('15-hour'));

$("#16-hour .description").val(localStorage.getItem('16-hour'));

$("#17-hour .description").val(localStorage.getItem('17-hour'));