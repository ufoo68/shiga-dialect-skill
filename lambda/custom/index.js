"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("ask-sdk-core");
var LaunchRequestHandler = {
    canHandle: function (handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle: function (handlerInput) {
        var speechText = 'Welcome, you can say Hello or Help. Which would you like to try?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
var HelloWorldIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'Hello World!';
        return (handlerInput.responseBuilder
            .speak(speechText)
            // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse());
    },
};
var HelpIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'You can say hello to me! How can I help?';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
var CancelAndStopIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
                handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'));
    },
    handle: function (handlerInput) {
        var speechText = 'Goodbye!';
        return handlerInput.responseBuilder.speak(speechText).getResponse();
    },
};
var SessionEndedRequestHandler = {
    canHandle: function (handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    // eslint-disable-next-line linebreak-style
    handle: function (handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    },
};
var ErrorHandler = {
    canHandle: function () {
        return true;
    },
    handle: function (handlerInput, error) {
        console.log("~~~~ Error handled: " + error.message);
        var speechText = "Sorry, I couldn't understand what you said. Please try again.";
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(LaunchRequestHandler, HelloWorldIntentHandler, HelpIntentHandler, CancelAndStopIntentHandler, SessionEndedRequestHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
