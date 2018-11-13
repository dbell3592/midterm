Survey.Survey.cssType = "bootstrap";

var surveyJSON = { pages: [{ name: "page1", elements: [{ type: "text", name: "name", title: "Please enter your name:", isRequired: true, placeHolder: "Jon Snow" }, { type: "text", name: "birthdate", title: "Your birthdate:", isRequired: true, inputType: "date" }, { type: "text", name: "color", title: "Your favorite color:", inputType: "color" }, { type: "text", name: "email", title: "Your e-mail:", isRequired: true, validators: [{ type: "email" }], inputType: "email", placeHolder: "jon.snow@nightwatch.org" }] }] }

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});