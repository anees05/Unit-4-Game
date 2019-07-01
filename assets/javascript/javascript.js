// <!-- Pseudocode -->

// <!-- A game with four crystals and a result -->
// <!-- Each crystal needs to be a random number between 1-12 -->
// <!-- The result needs to be radom number between 19 and 120-->
// <!-- After each round (win or loss) the crystal's random number and result's random number will be chosen again -->
// <!-- When clicking on the crystal, the user's score should be added by that amount -->
// <!-- If the user's score is equal to radom result, then the user wins -->
// <!-- If the user's score does not equal the random result, then the user loses -->

var randomResult;
var loss = 0;
var win = 0;
var previous = 0;

var resetGame = function () {

    $(".crystals").empty();

    randomResult = Math.floor(Math.random() * 111) + 19;

    $("#result").html('Random Result: ' + randomResult);
    for (var i = 0; i < 4; i++) {


        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });

        // crystal.html(random);

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);
}

resetGame();


$(document).on("click", ".crystal",  function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > randomResult) {
        loss++;

        $("#loss").html("Loss Counter: " + loss);

        previous = 0;

        resetGame();

    } else if (previous === randomResult) {
        win++;

        $("#win").html("Win Counter: " + win);

        previous = 0;

        resetGame();
    }


});