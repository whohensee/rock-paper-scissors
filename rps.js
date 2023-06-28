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
