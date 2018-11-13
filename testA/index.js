Survey.Survey.cssType = "bootstrap";

var json = {
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your name:",
            placeHolder: "Jon Snow",
            isRequired: true
        }, {
            name: "birthdate",
            type: "text",
            inputType: "date",
            title: "Your birthdate:",
            isRequired: true
            }, {
            name: "first job",
            type: "text",
            inputType: "date",
            title: "first job:",
            isRequired: true
            }, {
            name: "previous employer",
            type: "text",
            inputType: "date",
            title: "previous employer:",
            isRequired: true
            }, {
            name: "position",
            type: "text",
            inputType: "date",
            title: "position applying for?:",
            isRequired: true
            }, {
            name: "refrences",
            type: "text",
            inputType: "date",
            title: "refrences:",
            isRequired: true
            }, {
            name: "recent jobs",
            type: "text",
            inputType: "date",
            title: "recent jobs:",
            isRequired: true
            }, {
            name: "skills",
            type: "text",
            inputType: "date",
            title: "your skills:",
            isRequired: true
        }, {
            name: "color",
            type: "text",
            inputType: "color",
            title: "Your favorite color:"
        }, {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail:",
            placeHolder: "jon.snow@nightwatch.org",
            isRequired: true,
            validators: [
                {
                    type: "email"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyElement").Survey({
    model: survey,
    onComplete: sendDataToServer
});
