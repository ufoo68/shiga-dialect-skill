"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alexa = require("ask-sdk-core");
var LaunchRequestHandler = {
    canHandle: function (handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle: function (handlerInput) {
        var speechText = 'なんか喋ってください。';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
var AngryIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'AngryIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'ちょかんなや！';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('なんか喋ってください。')
            .getResponse();
    },
};
var ComeinIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'ComeinIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'きやる。';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('なんか喋ってください。')
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
        var speechText = 'ほな！';
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
    handle: function (handlerInput) {
        var speechText = 'もっかい、いってください。';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    },
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(LaunchRequestHandler, AngryIntentHandler, CancelAndStopIntentHandler, SessionEndedRequestHandler, ComeinIntentHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
