// <!-- Pseudocode -->

// <!-- A game with four crystals and a result -->
// <!-- Each crystal needs to be a random number between 1-12 -->
// <!-- The result needs to be radom number between 19 and 120-->
// <!-- After each round (win or loss) the crystal's random number and result's random number will be chosen again -->
// <!-- When clicking on the crystal, the user's score should be added by that amount -->
// <!-- If the user's score is equal to radom result, then the user wins -->
// <!-- If the user's score does not equal the random result, then the user loses -->

var randomResult;
var loss;
var win; 


for (var i = 0; i < 4; i++){
    
    var random = math.floor(math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr("class", 'crystal');

    $(".crystals").append(crystal);

}
