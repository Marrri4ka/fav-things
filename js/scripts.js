$(document).ready(function() {
  $("#submit_info").submit(function(event) {
    event.preventDefault();
    $("#submit_info").hide();
 $("#element1").hide();
  $("#element2").hide();

    var thing1 = $("input#thing1").val();
    // $("#result1").text(thing1);
    //   $("#result1").show();
    var thing2 = $("input#thing2").val();
    // $("#result2").text(thing2);
    //   $("#result2").show();
    var thing3 = $("input#thing3").val();
    // $("#result3").text(thing3);
    //   $("#result3").show();
    var newArray = [thing1, thing2, thing3];


     var firstEnlement = newArray[0];
     var secondElement = newArray [2];

     var brandNew = [];
     brandNew.push(firstEnlement,secondElement);
     $("#element1").text(firstEnlement);
     $("#element1").show();
     $("#element2").text(secondElement);
     $("#element2").show();

  });
    });
