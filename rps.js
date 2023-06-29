"use strict";

function convertRPStoMod3(sel) {
  let mod3num;
  sel = sel.toLowerCase();
  if (sel == "rock") {
    mod3num = 0;
  } else if (sel == "paper") {
    mod3num = 1;
  } else if (sel == "scissors") {
    mod3num = 2;
  } else {
    console.log("WE HAVE A PROBLEM IN convertRPStoMod3");
  }
  return mod3num;
}

function playSingleRound(pSel, cSel) {
  let pMod3;
  let cMod3;
  let result;
  let result_string;
  let compare_string;
  pMod3 = convertRPStoMod3(pSel);
  cMod3 = convertRPStoMod3(cSel);

  if (pMod3 == cMod3) {
    result = 2; // tie
    result_string = "tie";
    compare_string = "ties with ";
  } else if ((pMod3 + 1) % 3 == cMod3) {
    result = 0; // lose
    result_string = "lose";
    compare_string = "loses to ";
  } else {
    result = 1; // win
    result_string = "win";
    compare_string = "beats ";
  }
  console.log(
    "You " + result_string + "! " + pSel + " " + compare_string + cSel + "."
  );
  return result;
}
