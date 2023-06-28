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