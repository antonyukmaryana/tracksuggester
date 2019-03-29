$().ready(function(){
  $("form#trackspectrum").submit(function(event){
    var answer1 = parseInt($("select#question1").val());
    var answer2 = parseInt($("select#question2").val());
    var answer3 = parseInt($("select#question3").val());
    var answer3 = parseInt($("select#question4").val());
    var answer5 = parseInt($("select#question5").val());
    var total = answer1 + answer2 + answer3 + number4 + number5

    if (total < 0) {
      result = "C#/.Net";
    } else if (total > 0) {
      result = "CSS/Design";
    } else {
      result = "Java/Android";
    }

    $("#track").empty().append(result);
    $("#result").show();

      event.preventDefault();
    });
  });
