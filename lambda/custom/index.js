"use strict";
exports.__esModule = true;
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
    }
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
    }
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
    }
};
var DumpIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'DumpIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'ほかす。';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('なんか喋ってください。')
            .getResponse();
    }
};
var HardIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'HardIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'かなんわ。';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('なんか喋ってください。')
            .getResponse();
    }
};
var StriveIntentHandler = {
    canHandle: function (handlerInput) {
        return (handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
            handlerInput.requestEnvelope.request.intent.name === 'StriveIntent');
    },
    handle: function (handlerInput) {
        var speechText = 'きばる。';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt('なんか喋ってください。')
            .getResponse();
    }
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
    }
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
    }
};
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(LaunchRequestHandler, AngryIntentHandler, CancelAndStopIntentHandler, ComeinIntentHandler, DumpIntentHandler, HardIntentHandler, StriveIntentHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
