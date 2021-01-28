$(document).ready(function () {
  $("#presentDay").text(moment());
  $(".saveBtn9").on("click", function () {
    console.log("hi");
    var input9 = $(".description9").val();
    var time9 = $(".hour").text();
    localStorage.setItem("time9", input9);
  });

  $(".saveBtn1").on("click", function () {
    var input1 = $(".description1").val();
    var time1 = $(".hour").text();
    localStorage.setItem("time1", input1);
  });
  $(".saveBtn2").on("click", function () {
    var input2 = $(".description2").val();
    var time2 = $(".hour").text();
    localStorage.setItem("time2", input2);
  });
  $(".saveBtn3").on("click", function () {
    var input3 = $(".description3").val();
    var time3 = $(".hour").text();
    localStorage.setItem("time3", input3);
  });
  $(".saveBtn4").on("click", function () {
    var input4 = $(".description4").val();
    var time4 = $(".hour").text();
    localStorage.setItem("time4", input4);
  });
  $(".saveBtn5").on("click", function () {
    var input5 = $(".description5").val();
    var time5 = $(".hour").text();
    localStorage.setItem("time5", input5);
  });
  $(".saveBtn6").on("click", function () {
    var input6 = $(".description6").val();
    var time6 = $(".hour").text();
    localStorage.setItem("time6", input6);
  });
  $(".saveBtn7").on("click", function () {
    var input7 = $(".description7").val();
    var time7 = $(".hour").text();
    localStorage.setItem("time7", input7);
  });
  $(".saveBtn8").on("click", function () {
    var input8 = $(".description8").val();
    var time8 = $(".hour").text();
    localStorage.setItem("time8", input8);
  });

  // function colorOverlay() {
  //   var presentTime = moment().hours();

  //   $(".time-block").each(function () {
  //     var newTime = parseInt($(this).attr(id).split("-")[1]);

  //     if (newTime < presentTime) {
  //       $(this).addClass("past");
  //     } else if (newTime === presentTime) {
  //       $(this).removeClass("past");
  //       $(this).addClass("present");
  //     } else {
  //       $(this).removeClass("past");
  //       $(this).removeClass("present");
  //       $(this).addClass("future");
  //     }
  //   });
  // }
  $("#9-hour").val(localStorage.getItem("time1"));

  $("#10-hour").val(localStorage.getItem("time2"));

  $("#11-hour").val(localStorage.getItem("time3"));

  $("#12-hour").val(localStorage.getItem("time4"));

  $("#13-hour").val(localStorage.getItem("time5"));

  $("#14-hour").val(localStorage.getItem("time6"));

  $("#15-hour").val(localStorage.getItem("time7"));

  $("#16-hour").val(localStorage.getItem("time8"));

  $("#17-hour").val(localStorage.getItem("time9"));
  // colorOverlay();
});
