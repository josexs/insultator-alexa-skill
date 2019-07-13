import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"
import { messages } from '../messages';

export class AmazonNavigateHomeIntentHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.NavigateHomeIntent';
    }

    handle(handlerInput: HandlerInput): Response {
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder
            .speak(messages.welcome)
            .reprompt(messages.welcomeRepeat)
            .withSimpleCard(messages.title, messages.welcome)
            .getResponse();
    }
}
