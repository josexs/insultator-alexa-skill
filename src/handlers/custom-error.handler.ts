import { HandlerInput, ErrorHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model'
import { messages } from '../messages';

export class CustomErrorHandler implements ErrorHandler {
    public canHandle(): boolean {
        return true;
    }

    public handle(handlerInput: HandlerInput, error: Error): Response {
        const request = handlerInput.requestEnvelope.request;

        console.log(`Error handled: ${error.message}`)
        console.log(`Original Request was: ${JSON.stringify(request, null, 2)}`);

        return handlerInput.responseBuilder
            .speak(messages.error)
            .reprompt(messages.errorRepeat)
            .getResponse();
    }
}
