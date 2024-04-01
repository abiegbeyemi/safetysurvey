// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
        type: "radiogroup",
        name: "question1",
        title: "What is the main reason for a kitchen ventilation system?",
        choices: [
            "Add flavor to food", "Cool down the kitchen", "Remove heat, smoke, and odours", "Increase humidity"
        ],
        correctAnswer: "Remove heat, smoke, and odours"
    },
    {
        type: "radiogroup",
        name: "question2",
        title: "What are the recommended methods for safely thawing frozen food?",
        choices: [
            "Leave out in room", "Thaw in fridge", "Thaw in hot water", "Thaw in microwave",
        ],
        correctAnswer: "Thaw in fridge"

    },
    {
        type: "radiogroup",
        name: "question3",
        title: "How should cooking oils be safely stored and disposed?",
        choices: [
            "Store on the counter", "Dispose down the drain", "Stored away from heat and closed", "Pour in the trash when hot",
        ],
        correctAnswer: "Stored away from heat and closed"

    },
    {
        type: "radiogroup",
        name: "question4",
        title: "In the event of a small grease fire, what should be done?",
        choices: [
            "Throw water on it", "Cover pan with lid", "Pour baking soda over it", "Use fire extinguisher",
        ],
        correctAnswer: "Cover pan with lid"

    },
    {
        type: "radiogroup",
        name: "question5",
        title: "When done boiling, where should eggs be put?",
        choices: [
            "An ice bath" , "In a containter", "On the counter", "Left on the stove",
        ],
        correctAnswer: "An ice bath"

    },
    {
        type: "radiogroup",
        name: "question6",
        title: "How often should cutting boards be washed after cutting meat?",
        choices: [
            "Once a day", "Once a week", "Once a month", "After each use"
        ],
        correctAnswer: "After each use"

    },
    {
        type: "radiogroup",
        name: "question7",
        title: "True or false, gloves are more sanitary than washed clean hands?",
        choices: [
            "True", "False", "Depends who you ask"
        ],
        correctAnswer: "False"

    },
    {
        type: "radiogroup",
        name: "question8",
        title: "What is the proper way to lift a heavy pot?", 
        choices: [
            "Grab one handle and suport the bottom", "Use one hand to life", "Slide across counter", "Tilt over and lift",
        ],
        correctAnswer: "Grab one handle and suport the bottom"

    },
    {
        type: "radiogroup",
        name: "question9",
        title: "What is the proper way to put a knife in the sink?",
        choices: [
            "Handle first", "Throw it in", "Blade first", "Under the dishes"
        ],
        correctAnswer: "Blade first"

    },
     {
        type: "radiogroup",
        name: "question10",
        title: "True or False, Aprons are required in the kitchen when working with food?", 
        choices: [
            "True", "False"
        ],
        correctAnswer: "True"

    },

    ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Restaurant Kitchen & Food Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Kitchen and Food Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
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