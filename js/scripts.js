$(document).ready(function(){
  $("#post-epicodus").submit(function(event) {
    event.preventDefault();
    $("#fortune-answer").show();
    $("input:checkbox[name=easy-concepts]:checked").each(function() {
      var easy = $(this).val();
      $("#fortune-answer").append(easy);
    });
    $("input:checkbox[name=hard-concepts]:checked").each(function() {
      var hard = $(this).val();
      $("#fortune-answer").append(hard);
    });
    $("#post-epicodus").hide();
  });
});
