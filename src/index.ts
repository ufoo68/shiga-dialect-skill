import { Response } from 'ask-sdk-model'

import Alexa = require('ask-sdk-core')

const LaunchRequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest'
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'Welcome, you can say Hello or Help. Which would you like to try?'
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse()
  },
}
const HelloWorldIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'Hello World!'
    return (
      handlerInput.responseBuilder
        .speak(speechText)
        // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    )
  },
}
const HelpIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent'
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'You can say hello to me! How can I help?'

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse()
  },
}
const CancelAndStopIntentHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent' ||
        handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent')
    )
  },
  handle(handlerInput: Alexa.HandlerInput): Response {
    const speechText = 'Goodbye!'
    return handlerInput.responseBuilder.speak(speechText).getResponse()
  },
}
const SessionEndedRequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput): boolean {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest'
  },
  // eslint-disable-next-line linebreak-style
  handle(handlerInput: Alexa.HandlerInput): Response {
    // Any cleanup logic goes here.
    return handlerInput.responseBuilder.getResponse()
  },
}

const ErrorHandler = {
  canHandle(): boolean {
    return true
  },
  handle(handlerInput: Alexa.HandlerInput, error: Error): Response {
    console.log(`~~~~ Error handled: ${error.message}`)
    const speechText = "Sorry, I couldn't understand what you said. Please try again."

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse()
  },
}

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda()
