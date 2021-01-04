let facts = [
  "Alabama - It's first permanent state capital is now a ghost town.",
  "Alaska - Denaii is the highest mountain peak in the United States",
  "Arizona - Cactus Wren is Arizona's State bird",
  "Arkansas - State Flower is the Apple Blossom",
  "California - Has over 6500 types plant types",
  "Colorado - In Spanish Colorado means colored red",
  "Connecticut - One of two states to voting against the 2nd amendment",
  "Delaware - Discovered by Henry Hudson in 1609",
  "Florida - 2/3s of the state is peninsula",
  "Georgia -  Largest state east of the Mississippi river",
  "Hawaii - Widest state in the US from east to west",
  "Idaho - One of the places in the world where star garnets can be found",
  "Illinois - World's largest bottle of Catsup",
  "Indiana - City Peru was known as the Circus Capital of America",
  "Iowa - Sabula is the town on an Island in this state",
  "Kansas - Has 27 Walnut Creeks",
  "kentucky - Chevrolet Corvettes are manufactured in Bowling Green",
  "Louisana - Governed under 10 different flags since 1941",
  "Maine - Only state with one syllabus",
  "Maryland - University of Maryland is home to the first dental school",
  "Massachusetts - Boston Light was the first lighthouse built the United States Boston",
  "Michigan - Only state consisting of two peninsulas",
  "Minnesota - The creation of the stapler was in Spring Valley",
  "Mississippi - Magnolia is the state flower and state tree",
  "Missouri - The Show Me State",
  "Montana -  Largest observed snowflake was found in Fort Keogh, Montana  (15 Inch Diameter)",
  "Nebraska -  More miles of river than any other state",
  "Nevada - 1931, Gambling was legalized in the state by Governer Fred Balzac"];
let question = [
  // North Carolina
  "This state is home to eleventh U.S. President, James K. Polk?",
  // Telegraph
  "The First public demonstration of this item was in Morristown, New Jersey on January 11, 1838?",
  // August 5, 1914
  "The world's first electric signal was put into the street in Cleveland, Ohio on this date?",
  //Iowa
  "The first bread slicing machine was created in this state",
  //722
  "New York City has ___ miles of subway track"
];

let a1 = ["Virginia", "Nebraska", "North Carolina", "Maine"];
let a2 = ["Sewing Machine", "Telegraph", "Propeller", "Ice Machine"];
let a3 = ["August 5, 1914", "August 6, 1914", "July 7, 1914", "August 7, 1914"];
let a4 = ["Kansas", "Utah", "Vermont", "Iowa"];
let a5 = ["721", "750", "722", "732"];


let count = Math.floor(Math.random() * 28) + 0;

let subcount = 0;

let correct = 0;
let wrong = 0;

const max = 5;

let ischecked = false;

let checkone = false;
let checktwo = false;
let checkthree = false;
let checkfour = false;

document.getElementById('quiz-start-fact').innerHTML = facts[count];
document.getElementById('quiz-start-button').addEventListener("click", display);
let dis = document.createElement('div');
dis.setAttribute('id', 'quiz-body');
+ `<div class="quiz-select">`
+ `<button class="selection" id="select1"></button>`
+ `<button class="selection" id="select2"></button>`
+ `<button class="selection" id="select3"></button>`
+ `<button class="selection" id="select4"></button>`
+ `<button class="sub-selection" id="submit-sel">Submit</button>`
+ '</div>';
document.querySelector('.quiz-game').appendChild(dis);
function display() {
  document.querySelector('.quiz-start').style.display = "none";
  dis.innerHTML = `<h1 id="quiz">50 States Quiz</h1><h1 id="question-title">` + question[0] + `</h1>`
  + `<div class="quiz-select">`
  + `<button class="selection" id="select1">` + a1[0] + `</button>`
  + `<button class="selection" id="select2">` + a1[1] + `</button>`
  + `<button class="selection" id="select3">` + a1[2] + `</button>`
  + `<button class="selection" id="select4">` + a1[3] + `</button>`
  + `<button class="sub-selection" id="submit-sel">Submit</button>`
  + '</div>';
  document.querySelector('.quiz-game').appendChild(dis);
  document.getElementById('select1').addEventListener("click", selectone);
  document.getElementById('select2').addEventListener("click", selecttwo);
  document.getElementById('select3').addEventListener("click", selectthree);
  document.getElementById('select4').addEventListener("click", selectfour);
  document.getElementById('submit-sel').addEventListener("click", next);
  document.getElementById('submit-sel').disabled = true;
  function selectone() {
    if (ischecked === true) {
        ischecked = false;
        checkone = false;
        checktwo = false;
        checkthree = false;
        checkfour = false;
        for (let i = 1; i <= 4; i++) {
          element = "select" + i;
              document.getElementById(element).style.backgroundColor = "blue";
        }
        document.getElementById('submit-sel').disabled = true;
    } else {
    document.getElementById('select1').style.backgroundColor = "green";
    ischecked = true;
    checkone = true;
    document.getElementById('submit-sel').disabled = false;
  }
  }
  function selecttwo() {
    if (ischecked === true) {
        ischecked = false;
        checkone = false;
        checktwo = false;
        checkthree = false;
        checkfour = false;
        for (let i = 1; i <= 4; i++) {
          element = "select" + i;
              document.getElementById(element).style.backgroundColor = "blue";
        }
          document.getElementById('submit-sel').disabled = true;
    } else {
    document.getElementById('select2').style.backgroundColor = "green";
    ischecked = true;
    checktwo = true;
    document.getElementById('submit-sel').disabled = false;
  }
  }
  function selectthree() {
    if (ischecked === true) {
        ischecked = false;
        checkone = false;
        checktwo = false;
        checkthree = false;
        checkfour = false;
        for (let i = 1; i <= 4; i++) {
          element = "select" + i;
              document.getElementById(element).style.backgroundColor = "blue";
        }
        document.getElementById('submit-sel').disabled = true;
    } else {
    document.getElementById('select3').style.backgroundColor = "green";
    ischecked = true;
    checkthree = true;
    document.getElementById('submit-sel').disabled = false;
  }
  }
  function selectfour() {
    if (ischecked === true) {
        ischecked = false;
        checkone = false;
        checktwo = false;
        checkthree = false;
        checkfour = false;
        for (let i = 1; i <= 4; i++) {
          element = "select" + i;
              document.getElementById(element).style.backgroundColor = "blue";
        }
        document.getElementById('submit-sel').disabled = true;
    } else {
    document.getElementById('select4').style.backgroundColor = "green";
    ischecked = true;
    checkfour = true;
    document.getElementById('submit-sel').disabled = false;
  }
  }
  function next() {
      subcount++;
      if (subcount === 1) {
      dis.innerHTML = `<h1 id="quiz">50 States Quiz</h1><h1 id="question-title">` + question[1] + `</h1>`
      + `<div class="quiz-select">`
      + `<button class="selection" id="select1">` + a2[0] + `</button>`
      + `<button class="selection" id="select2">` + a2[1] + `</button>`
      + `<button class="selection" id="select3">` + a2[2] + `</button>`
      + `<button class="selection" id="select4">` + a2[3] + `</button>`
      + `<button class="sub-selection" id="submit-sel">Submit</button>`
      + '</div>';
      document.querySelector('.quiz-game').appendChild(dis);
      document.getElementById('select1').addEventListener("click", selectone);
      document.getElementById('select2').addEventListener("click", selecttwo);
      document.getElementById('select3').addEventListener("click", selectthree);
      document.getElementById('select4').addEventListener("click", selectfour);
      document.getElementById('submit-sel').addEventListener("click", next);
      document.getElementById('submit-sel').disabled = true;
    } else if (subcount === 2) {
      dis.innerHTML = `<h1 id="quiz">50 States Quiz</h1><h1 id="question-title">` + question[2] + `</h1>`
          + `<div class="quiz-select">`
          + `<button class="selection" id="select1">` + a3[0] + `</button>`
          + `<button class="selection" id="select2">` + a3[1] + `</button>`
          + `<button class="selection" id="select3">` + a3[2] + `</button>`
          + `<button class="selection" id="select4">` + a3[3] + `</button>`
          + `<button class="sub-selection" id="submit-sel">Submit</button>`
          + '</div>';
          document.querySelector('.quiz-game').appendChild(dis);
          document.getElementById('select1').addEventListener("click", selectone);
          document.getElementById('select2').addEventListener("click", selecttwo);
          document.getElementById('select3').addEventListener("click", selectthree);
          document.getElementById('select4').addEventListener("click", selectfour);
          document.getElementById('submit-sel').addEventListener("click", next);
          document.getElementById('submit-sel').disabled = true;
        } else if (subcount === 3) {
          dis.innerHTML = `<h1 id="quiz">50 States Quiz</h1><h1 id="question-title">` + question[3] + `</h1>`
              + `<div class="quiz-select">`
              + `<button class="selection" id="select1">` + a4[0] + `</button>`
              + `<button class="selection" id="select2">` + a4[1] + `</button>`
              + `<button class="selection" id="select3">` + a4[2] + `</button>`
              + `<button class="selection" id="select4">` + a4[3] + `</button>`
              + `<button class="sub-selection" id="submit-sel">Submit</button>`
              + '</div>';
              document.querySelector('.quiz-game').appendChild(dis);
              document.getElementById('select1').addEventListener("click", selectone);
              document.getElementById('select2').addEventListener("click", selecttwo);
              document.getElementById('select3').addEventListener("click", selectthree);
              document.getElementById('select4').addEventListener("click", selectfour);
              document.getElementById('submit-sel').addEventListener("click", next);
              document.getElementById('submit-sel').disabled = true;
            } else if (subcount === 4) {
              dis.innerHTML = `<h1 id="quiz">50 States Quiz</h1><h1 id="question-title">` + question[4] + `</h1>`
                  + `<div class="quiz-select">`
                  + `<button class="selection" id="select1">` + a5[0] + `</button>`
                  + `<button class="selection" id="select2">` + a5[1] + `</button>`
                  + `<button class="selection" id="select3">` + a5[2] + `</button>`
                  + `<button class="selection" id="select4">` + a5[3] + `</button>`
                  + `<button class="sub-selection" id="submit-sel">Submit</button>`
                  + '</div>';
                  document.querySelector('.quiz-game').appendChild(dis);
                  document.getElementById('select1').addEventListener("click", selectone);
                  document.getElementById('select2').addEventListener("click", selecttwo);
                  document.getElementById('select3').addEventListener("click", selectthree);
                  document.getElementById('select4').addEventListener("click", selectfour);
                  document.getElementById('submit-sel').addEventListener("click", next);
                  document.getElementById('submit-sel').disabled = true;
                }
                if (subcount === 0 && checkthree === true) {
                  correct++;
                  console.log("Correct: " + correct);
                } else {
                  wrong++;
                  console.log("Wrong: " + wrong);
                }
                if (subcount === 1 && checktwo === true) {
                  correct++;
                  console.log("Correct: " + correct);
                } else {
                  wrong++;
                  console.log("Wrong: " + wrong);
                }
                if (subcount === 2 && checkone === true) {
                  correct++;
                  console.log("Correct: " + correct);
                } else {
                  wrong++;
                  console.log("Wrong: " + wrong);
                }
                if (subcount === 3 && checkfour === true) {
                  correct++;
                  console.log("Correct: " + correct);
                } else {
                  wrong++;
                  console.log("Wrong: " + wrong);
                }
                if (subcount === 4 && checktwo === true) {
                  correct++;
                  console.log("Correct: " + correct);
                } else {
                  wrong++;
                  console.log("Wrong: " + wrong);
                }
  }
}
