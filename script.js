// for storage between navigation
var memento = {};
// the element in middle of page
var center = document.getElementById("middle");
// save the greeting element
// html page starts with greeting element
memento.original = center.innerHTML;

// var to hold time
var time = null;
// to keep track of remaining time
var remainig_time = 100;

// array of functions to call in sequence
var sequence = [];
// var to hold scores
var score = 0;
// var to hold the high scorers
var high_scores = [];

/**
 * user procided right answer
 *
 * @param      {number}  nxt index of The next function to call
 */
function right(nxt) {
  // display the line element dynamically
  document.getElementById("line").style.display = "block";
  // display the message element dynamically
  document.getElementById("mark").style.display = "block";
  // display the message about answered question dynamically
  document.getElementById("mark").innerHTML = "Correct!";
  // increase score
  score += 10;
  // call the next function in sequence
  if (nxt < sequence.length) {
    sequence[nxt]();
  } else {
    console.log("GAME OVER");
  }
}

/**
 * user procided wrong answer
 *
 * @param      {number}  nxt index of The next function to call
 */
function wrong(nxt) {
  // display the line element dynamically
  document.getElementById("line").style.display = "block";
  // display the message element dynamically
  document.getElementById("mark").style.display = "block";
  // display the message about answered question dynamically
  document.getElementById("mark").innerHTML = "Wrong!";
  // subtract the time remaining
  remainig_time -= 10;
  // call the next function in sequence
  if (nxt < sequence.length) {
    sequence[nxt]();
  } else {
    console.log("GAME OVER");
  }
}

/**
 * the first question
 */
function question1() {
  // get html element
  var center = document.getElementById("middle");

  // dynamically change the question
  center.innerHTML = "";
  // dynamically change the question
  center.innerHTML = `<h1 class="font"><b>Commonly used datatypes do not include: </b></h1>
  					   <div style="clear:both;"></div>`;
  // dynamically change the options by adding buttons
  // buttons have relevant callbacks
  center.innerHTML += `<button  class="btn left" onclick="wrong(1)">1. strings</button>
  					    <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left" onclick="wrong(1)">2. booleans</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="right(1)">3. alerts</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="wrong(1)">4. numbers</button>
  					   <div style="clear:both;"></div>`;
}
// add function to sequence
sequence.push(question1);
/**
 * the second question
 */
function question2() {
  // get html element
  var center = document.getElementById("middle");
  // dynamically change the question
  center.innerHTML = "";
  // console.log(center)
  // dynamically change the question
  center.innerHTML = `<h1 class="font"><b>The condition of an if else statement is enclosed with__ </b></h1>
  					   <div style="clear:both;"></div>`;
  // dynamically change the options by adding buttons
  // buttons have relevant callbacks
  center.innerHTML += `<button  class="btn left" onclick="wrong(2)">1. quotes</button>
  					    <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left" onclick="wrong(2)">2. curly brackets</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="right(2)">3. parentesis</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="wrong(2)">4. square brackets</button>
  					   <div style="clear:both;"></div>`;
}
// add function to sequence
sequence.push(question2);
/**
 * question 3
 */
function question3() {
  // get html element
  var center = document.getElementById("middle");
  center.innerHTML = "";
  // console.log(center)
  // dynamically change the question
  center.innerHTML = "";
  center.innerHTML = `<h1 class="font"><b>Arrays in JavaScript can be used to store ____</b></h1>
  					   <div style="clear:both;"></div>`;
  // dynamically change the options by adding buttons
  // buttons have relevant callbacks
  center.innerHTML += `<button  class="btn left" onclick="wrong(3)">1. numbers and strings</button>
  					    <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left" onclick="wrong(3)">2. other arrays</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="wrong(3)">3. booleans</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="right(3)">4. all the above</button>
  					   <div style="clear:both;"></div>`;
}
// add function to sequence
sequence.push(question3);
/**
 * question 4
 */
function question4() {
  // get html element
  var center = document.getElementById("middle");
  center.innerHTML = "";
  // console.log(center)
  // dynamically change the question
  center.innerHTML = "";
  center.innerHTML = `<h1 class="font"><b>String values must be enclosed within ____ when being assigned to variables</b></h1>
  					   <div style="clear:both;"></div>`;
  // dynamically change the options by adding buttons
  // buttons have relevant callbacks
  center.innerHTML += `<button  class="btn left" onclick="wrong(5)">1. commas</button>
  					    <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left" onclick="wrong(5)">2. curly brackects</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="right(5)">3. quotes</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="wrong(5)">4. parenthesis</button>
  					   <div style="clear:both;"></div>`;
}
// add function to sequence
sequence.push(question4);
/**
 * quesion 5
 */
function question5() {
  var center = document.getElementById("middle");
  center.innerHTML = "";
  // console.log(center)
  // dynamically change the question
  center.innerHTML = "";
  center.innerHTML = `<h1 class="font">
  						<b>
  						A very useful tool during development and debugging from printing 
  						content to the debbuger is ________
  						</b>
  					   </h1>
  					   <div style="clear:both;"></div>`;
  // dynamically change the options by adding buttons
  // buttons have relevant callbacks
  center.innerHTML += `<button  class="btn left" onclick="wrong(6)">1. JavaScript</button>
  					    <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left" onclick="wrong(6)">2. terminal/bash</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="wrong(6)">3. for loops</button>
  					   <div style="clear:both;"></div>`;
  center.innerHTML += `<button  class="btn left"onclick="right(6)">4. console.log</button>
  					   <div style="clear:both;"></div>`;
}
// add function to sequence
sequence.push(question5);
/**
 * function to print results
 */
function results() {
  // crear the timer
  clearInterval(time);
  // get middle element
  var center = document.getElementById("middle");
  center.innerHTML = "";
  // console.log(center)
  // dynamically change the header
  center.innerHTML = `<h1 class="font">
  						<b>
  						All Done !
  						</b>
  					   </h1>
  					   <div style="clear:both;"></div>`;
  // dynamically add element print score
  center.innerHTML += `<h3 style="font-size: 20px;">Your Final Score is ${score}</h3>
  					    <div style="clear:both;"></div>`;
  // dynamically add input element to string for user name
  center.innerHTML += `<p style="float:left;font-size: 20px;">Enter Initials:&nbsp;</p>`;
  center.innerHTML += `<input style="float:left;" type="text" id="fname" name="fname" value="">`;
  // dynamically add buttons to receive the users initials
  center.innerHTML += `<button style="float:left;padding: 7px 17px;" class="btn"onclick="take_fname()">Submit</button>`;
}
// add function to sequence
sequence.push(results);
/**
 * clear hing scre
 */
function clear_high_scores() {
  high_scores = [];
}
/**
 * restore the original html page
 */
function restore_start_page() {
  // reset timesr
  clearInterval(time);
  // reset remaining time
  remainig_time = 100;
  // dinamically change time value
  document.getElementById("timer").innerHTML =
    "Time: " + remainig_time.toString();
  // get element
  var center = document.getElementById("middle");
  // dynamically restore it to original html
  center.innerHTML = memento.original;
}
/**
 * show the sores of all the users
 */
function high_scores_func() {
  // hide line
  document.getElementById("line").style.display = "none";
  // hide mark
  document.getElementById("mark").style.display = "node";

  // get center elemenst
  var center = document.getElementById("middle");
  center.innerHTML = "";
  // console.log(center)
  // dynamically chage it
  center.innerHTML = `<h1 class="font">
  						<b>
  						High Scores
  						</b>
  					   </h1>
  					   <div style="clear:both;"></div>`;

  /**
   * compare two objects
   *
   * @param      {object}  a       { first object }
   * @param      {object}  b       { second object }
   * @return     {number}  { description_of_the_return_value }
   */
  function compare(a, b) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }
  // sort the high scores
  high_scores.sort(compare);
  // dynamically add all the high scores in the
  high_scores.forEach(function (item, index) {
    center.innerHTML += `${index + 1}. &nbsp; ${item.fname} - ${
      item.score
    }<br><br>`;
  });
  // dynamically  add go back button
  center.innerHTML += `<button  style="padding: 7px 17px;" class="btn" onclick="restore_start_page()">go back</button>`;
  // dynamically add object to clear hing scores
  center.innerHTML += `<button  style="padding: 7px 17px;" class="btn" onclick="clear_high_scores()">clear high scores</button>`;
}

/**
 * function to take users name
 */
function take_fname() {
  // get element
  fname = document.getElementById("fname").value;
  // if name is not provided refuse order
  if (fname === "") {
    alert("you must provide a name!");
    return;
  }
  // append to scores
  high_scores.push({ fname: fname, score: score });
  // reset score
  score = 0;
  //console.log(your_scores);
  // print hing scores function
  high_scores_func();
}

//
function start() {
  // if its the first time being stored clear the timer
  if (time !== null) {
    clearInterval(time);
    remainig_time = 100;
  }
  // get element
  document.getElementById("timer").innerHTML =
    "Time: " + remainig_time.toString();
  // function to run every one second interval
  time = setInterval(function () {
    // reduce the time
    remainig_time--;
    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML =
      "Time: " + remainig_time.toString();
    // If the count down is over, write some text
    // because timer has expired
    if (remainig_time < 0) {
      // clear timer
      clearInterval(time);
      // get timing element and report expired time
      document.getElementById("timer").innerHTML = "EXPIRED";
      // print results
      results();
    }
  }, 1000);
  // start with the first sequence
  sequence[0]();
}
