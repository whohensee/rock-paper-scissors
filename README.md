# rock-paper-scissors

Project Pseudocode:

For Problem 4: Write a fn that plays a single round of RPS

fn playSingleRound(pSel, cSel)
    a = convertRPStoMod3(pSel)
    b = convertRPStoMod3(cSel)
    let result
    if a == b
        result = tie
    if a+1 == b (mod3)
        result = lose
    else
        result = win
    return result


For Problem 6: Write a function game() that plays a 5 round game
fn game()
    create a score counting variable
    create a total games played variable
    loop 
        prompt the user for a selection
        play a round
        update the score variable
        update the games played variable
        report the score
    report the final score and winner

######## WORKING ON THE UI ########
3 buttons, one for each choice, with event listeners