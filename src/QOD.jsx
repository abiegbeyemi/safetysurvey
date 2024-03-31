// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
        type: "radiogroup",
        name: "question1",
        title: "What is the most common cause of lifeguard injuries?",
        choices: [
            "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
        ],
        correctAnswer: "Slip and fall accidents"
    },
    {
        type: "radiogroup",
        name: "question2",
        title: "What is the one thing lifeguards have to wear around their neck?",
        choices: [
            "Sunglasses", "Necklace", "Whistle", "Scarf"
        ],
        correctAnswer: "Whistle"

    },
    {
        type: "radiogroup",
        name: "question3",
        title: "What is the correct ratio of chest compressions to rescue breaths when administering CPR to a drowning victim?",
        choices: [
            "15:1", "30:2", "5:1", "20:2"
        ],
        correctAnswer: "30:2"

    },
    {
        type: "radiogroup",
        name: "question4",
        title: "How many lifeguards need to be on duty if the pool is full?",
        choices: [
            "5", "1", "10", "3"
        ],
        correctAnswer: "3"

    },

    ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Book Keeping Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Book Keeping Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}