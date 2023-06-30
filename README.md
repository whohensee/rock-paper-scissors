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

New Pseudocode

On launching the page, we want to display the 3 buttons which will show your
options in RPS. We want a box showing the total wins, losses, and ties, and we
also want an area showing the result of the immediate last match.
