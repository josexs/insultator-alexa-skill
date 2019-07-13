import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model'
import { messages } from '../messages';

export class LaunchRequestHandler implements RequestHandler {
    public canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    }

    public handle(handlerInput: HandlerInput): Response {
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder
            .speak(messages.welcome)
            .reprompt(messages.welcomeRepeat)
            .withSimpleCard(messages.title, messages.welcome)
            .getResponse();
    }
}
