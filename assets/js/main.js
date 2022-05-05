let questionAnswer = [{
    question: "<h3>Sum of even numbers in the range 1 to 1000.</h3>",
    answer: "250500"
},
{
    question: "<h3>Sum of the strong numbers in the range 1 to 100000<br><h5>Strong numbers are the numbers which satisfy the below condition(the sum of the factorials of the digits is equal to the number itself).</h5><br><h5>145 = 1! + 4! + 5!</h5><br><h5>1! = 1<br>4!=24<br>5!=120<br>So the sum is 145</h5></h3>",
    answer: "40733"
},
{
    question: "question",
    answer: "answer3"
}
]

//  Submit Form
let form_submit_btn = document.getElementById("form-submit");

form_submit_btn.addEventListener("click", validate);

//  Validate Method Execute When Submit Button is Clicked
let i = 0; //  Pointer Variable

let question = document.getElementById("question"); //  Question

let submittedAnswer = document.getElementById("output"); // Submitted Output From the Contestant

// Dialog Model 

let modal = document.getElementById("myModal"); // Get the modal

let span = document.getElementById("close"); // Get the <span> element that closes the modal

let model_head = document.getElementById("model-head");

let model_body = document.getElementById("model-body");

let head_message, body_message;

window.onload = function (params) {
    question.innerHTML = questionAnswer[i].question;
    document.location = "#section";
}

function validate() {
    if (submittedAnswer.value == questionAnswer[i].answer && i == 0) {
        head_message = "Congratulations";
        body_message = "You got The Answer. Now solve the second question";
        i++;
        question.innerHTML = questionAnswer[i].question;
        submittedAnswer.value = "";
        document.querySelectorAll(".problem-1").forEach((element) => {element.style.color = "#FFF"});
    } else if (submittedAnswer.value == questionAnswer[i].answer && i == 1) {
        head_message = "Congratulations";
        body_message = "You got The Answer. Now solve the third question";
        i++;
        question.innerText = "3. " + questionAnswer[i].question;
        submittedAnswer.value = "";
        document.querySelectorAll(".problem-2").forEach((element) => {element.style.color = "#FFF"});
    } else if (submittedAnswer.value == questionAnswer[i].answer && i == 2) {
        head_message = "Congratulations";
        body_message = "The treasure is {KEY}";
        submittedAnswer.value = "";
        document.querySelectorAll(".problem-3").forEach((element) => {element.style.color = "#FFF"});
    } else {
        head_message = "OOPS...";
        body_message = "Wrong Answer Try Again";
    }
    model_head.innerText = head_message;
    model_body.innerText = body_message;
    modal.style.display = "block";
    document.location = "#solve";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function () {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
  }
  );
  document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}