var total_rounds;
var rem_rounds;

var round;
var current_score;
var total_score;

var user_choice;
var comp_choice;

var user_wins;
var comp_wins;

function startGame() {
    total_rounds = 0;
    rem_rounds = 0;

    round = 0;
    current_score = '';
    total_score = '';

    user_choice = "";
    comp_choice = "";

    user_wins = 0;
    comp_wins = 0;

    var rtp = document.getElementById("ROUNDS_TO_PLAY");
    if (rtp.value > 0) {
        total_rounds = rtp.value;
        alert("Playing rounds: " + parseInt(rtp.value));

        $("#ROUNDS_TO_PLAY").prop('disabled', true);
        $("#start").prop('disabled', true);
        $("#game_content").show();

        var rr = document.getElementById("REM_ROUNDS");
        rem_rounds = total_rounds - round;
        rr.textContent = rem_rounds;

        var rounds = document.getElementById("round");
        round++;
        rounds.textContent = round;
    }
    else {
        alert("Select a number greater than 0");
    }
}


function userChoice(buttonObj) {
    alert("You Chose: " + buttonObj);
    var uc = document.getElementById("user_choice");
    uc.textContent = "Your choice: " + buttonObj;
    user_choice = buttonObj;

    $("#game_play").hide();
    $("#user_choice").show();

    computerChoice();
    scoreUpdate();

}

function computerChoice() {
    // Array of choices
    const strings = ["Rock", "Scissors", "Paper", "Lizard", "Spock"];

    // Select a random choice
    comp_choice = strings[Math.floor(Math.random() * strings.length)];
    var cc = document.getElementById("comp_choice");
    cc.textContent = "Computer Choice: " + comp_choice;
    $("#comp_choice").show();
}

function scoreUpdate() {
    if (user_choice == "Rock") {
        if (comp_choice == "Lizard") {
            user_wins++;
            current_score = "You win with Rock crushing Lizard";
        }
        else if (comp_choice == "Scissors") {
            user_wins++;
            current_score = "You win with Rock crushing Scissors";
        }
        else if (comp_choice == "Paper") {
            comp_wins++;
            current_score = "Computer wins with Paper covering Rock";
        }
        else if (comp_choice == "Spock") {
            comp_wins++;
            current_score = "Computer wins with Spock vaporizing Rock";
        }
        else {
            current_score = "Rocks - It's a draw!";
        }
    }
    else if (user_choice == "Scissors") {
        if (comp_choice == "Paper") {
            user_wins++;
            current_score = "You win with Scissors cutting Paper";
        }
        else if (comp_choice == "Lizard") {
            user_wins++;
            current_score = "You win with Scissors decapitating Lizard";
        }
        else if (comp_choice == "Rock") {
            comp_wins++;
            current_score = "Computer wins with Rock crushing Scissors";
        }
        else if (comp_choice == "Spock") {
            comp_wins++;
            current_score = "Computer wins with Spock smashing Scissors";
        }
        else {
            current_score = "Scissors - It's a draw!";
        }
    }
    else if (user_choice == "Paper") {
        if (comp_choice == "Rock") {
            user_wins++;
            current_score = "You win with Paper covering Rock";
        }
        else if (comp_choice == "Spock") {
            user_wins++;
            current_score = "You win with Paper disproving Spock";
        }
        else if (comp_choice == "Scissors") {
            comp_wins++;
            current_score = "Computer wins with Scissors cutting Paper";
        }
        else if (comp_choice == "Lizard") {
            comp_wins++;
            current_score = "Computer wins with Lizard eating Paper";
        }
        else {
            current_score = "Papers - It's a draw!";
        }
    }
    else if (user_choice == "Lizard") {
        if (comp_choice == "Paper") {
            user_wins++;
            current_score = "You win with Lizard eating Paper";
        }
        else if (comp_choice == "Spock") {
            user_wins++;
            current_score = "You win with Lizard poisoning Spock";
        }
        else if (comp_choice == "Rock") {
            comp_wins++;
            current_score = "Computer wins with Rock crushing Lizard";
        }
        else if (comp_choice == "Scissors") {
            comp_wins++;
            current_score = "Computer wins with Scissors decapitating Lizard";
        }
        else {
            current_score = "Lizards - It's a draw!";
        }
    }
    else if (user_choice == "Spock") {
        if (comp_choice == "Rock") {
            user_wins++;
            current_score = "You win with Spock vaporizing Rock";
        }
        else if (comp_choice == "Scissors") {
            user_wins++;
            current_score = "You win with Spock smashing Scissors";
        }
        else if (comp_choice == "Paper") {
            comp_wins++;
            current_score = "Computer wins with Paper disproving Spock";
        }
        else if (comp_choice == "Lizard") {
            comp_wins++;
            current_score = "Computer wins with Lizard poisoning Spock";
        }
        else {
            current_score = "Spocks - It's a draw!";
        }
    }

    var currentScore = document.getElementById("current_score");
    currentScore.textContent = "Score of the Current Round: " + current_score;

    var rr = document.getElementById("REM_ROUNDS");
    rem_rounds = total_rounds - round;
    rr.textContent = rem_rounds;

    $("#current_score").show();
    $("#scoreboard").show();

    if (rem_rounds > 0) {
        $("#next_round").show();
    }
    else {
        var totalScore = document.getElementById("total_score");
        $("#total_score").show();
        if (user_wins > comp_wins) {
            totalScore.textContent = "Overall Winner: You won after winning " + user_wins + " of " + total_rounds + " rounds";
        }
        else if (user_wins < comp_wins) {
            totalScore.textContent = "Overall Winner: Computer won after winning " + comp_wins + " of " + total_rounds + " rounds";
        }
        else {
            totalScore.textContent = "Final: It's a draw. Ready for a Rematch?";
        }
    }

    var list = document.getElementsByTagName('ul')[0];
    var newItemLast = document.createElement('li');
    var newTextLast = document.createTextNode("Round " + round + " : " + current_score);
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);
}

function nextRound() {
    var rounds = document.getElementById("round");
    round++;
    rounds.textContent = round; $("#game_play").show();
    $("#user_choice").hide();
    $("#comp_choice").hide();
    $("#current_score").hide();
    $("#next_round").hide();
}

function reloadPage() {
    alert("Starting a new match. Current Progress/Score will be lost!!")
    location.reload();
}