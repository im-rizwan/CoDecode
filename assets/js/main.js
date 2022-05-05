let questionAnswer = [{
    question: "Sum of even numbers in the range 1 to 1000.",
    answer: "250500"
},
{
    question: "question",
    answer: "answer2"
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


function validate() {
if (submittedAnswer.value == questionAnswer[i].answer && i == 0) {
    head_message = "Congratulations";
    body_message = "You got The Answer. Now solve the second question";
    i++;
    question.innerText = "2. " + questionAnswer[i].question;
    submittedAnswer.value = "";
} else if (submittedAnswer.value == questionAnswer[i].answer && i == 1) {
    head_message = "Congratulations";
    body_message = "You got The Answer. Now solve the third question";
    i++;
    question.innerText = "3. " + questionAnswer[i].question;
    submittedAnswer.value = "";
} else if (submittedAnswer.value == questionAnswer[i].answer && i == 2) {
    head_message = "Congratulations";
    body_message = "The treasure is {KEY}";
    submittedAnswer.value = "";
} else {
    head_message = "OOPS...";
    body_message = "Wrong Answer Try Again";
}
model_head.innerText = head_message;
model_body.innerText = body_message;
modal.style.display = "block";
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