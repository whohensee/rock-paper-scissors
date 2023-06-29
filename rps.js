"use strict";

function getComputerChoice() {
  let compChoice;
  // generate a random integer 0,1,2 for the computer
  const compInt = Math.floor(Math.random() * 3);
  // depending on the integer, assign an appropriate string
  if (compInt == 0) {
    compChoice = "rock";
  } else if (compInt == 1) {
    compChoice = "paper";
  } else if (compInt == 2) {
    compChoice = "scissors";
  } else {
    console.log("ERROR: unexpected value in getComputerChoice()");
  }
  return compChoice;
}

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
  pSel = pSel.toLowerCase();
  cSel = cSel.toLowerCase();
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
    "You " +
      result_string +
      "! " +
      pSel[0].toUpperCase() +
      pSel.slice(1) +
      " " +
      compare_string +
      cSel +
      "."
  );
  return result;
}
