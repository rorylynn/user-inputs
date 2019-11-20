$(function() {
    //All JS goes within these brackets  
    
    $("#age-submit").click(function(){
      
      //select the box with id of height
      //get the value from that box
      var heightString = $("#height").val();
  
      //convert string to number
      var height = parseInt(heightString);
  
      //check if height is greater than 44
      if ( height >= 44 ) {
        //if height is greater than 44 show the next question
        $("#height-form").show();
        $("#age-form").hide();
      } else {
        $("#answer").text("Nope! Too short.");
        $("#height-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
      }
      
    });
  
    $("#age-submit").click(function(){
      var ageString = $("#age-form").val();
      var ageString = parseInt(age);
  
      if ( age > 10 ) {
        $("#age-form").hide();
        $("#answer").text("Yes! You can ride!");
        $("#yes-img").attr("src", "download-2.jpg");
        
      } else {
        $("#answer").text("scram. youre too young.");
        $("#no-img").attr("src", "1-12382_stop-sign-svg-clip-arts-600-x-600.jpg");
      }
    });
  
  });