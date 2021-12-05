// scripts here:

function submitQuiz() {
    console.log('submitter'); 


// get each answer score
    function answerScore(qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
            if (radiosNo[i].checked) {
        // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore); // it works!

// function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
        return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

// print correct answers only if wrong (calls correctAnswer function)
    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }

// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// show score as "score/possible score"
    var showScore = "Your Score: " + calcScore +"/" + questionCounter;
    var showPercentage = calcScore/length * 100 +'%';
    function grade(){
    if (calcScore/length  == 1){
        return "Perfect Score!"
    } 
    else if (calcScore/length >= .60){
        return "You passed! Good Job!"
    } else {
        return "Please Try Again."
    }
}
var showGrade = grade()
    document.getElementById('userScore').innerHTML = showScore;
    document.getElementById('userPercentage').innerHTML = showPercentage;
    document.getElementById('userGrade').innerHTML = showGrade;
}


$('#submitButton').click(submitQuiz);
var submitQuiz = function() {
    $('#submitButton').hide();
};
