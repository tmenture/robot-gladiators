// Game states
// "Win" - Player robot has defeated all enemy robots
//      * fight all enemy robots
//      * defeat each enemy robot
// "Lose" - Player robot's health is zero or less

// variable list
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can log multiple valuse at once 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// this is the fight function
var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Fight Club!");

    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player choses to fight fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //Subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        console.log (
            playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
     );
        // check enemys health
        if (enemyHealth <= 0 ) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the alue of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health 
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");     
        }

       // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confim player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question againby running fight() again
        else {
            fight();
        }
        // if player did not choose valid option
    } else {
        window.alert("You need to choose a valid option. Try again!");
    } 
    
};

// run the fight function to start the game 
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
