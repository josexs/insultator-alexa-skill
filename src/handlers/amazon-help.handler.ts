import { HandlerInput, RequestHandler } from "ask-sdk";
import { Response } from "ask-sdk-model"
import { messages } from '../messages';

export class AmazonHelpIntentHandler implements RequestHandler {
    canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent'
    }

    handle(handlerInput: HandlerInput): Response {
        console.log('helpIntent')
        const responseBuilder = handlerInput.responseBuilder;

        return responseBuilder.speak(messages.help)
            .getResponse();
    }
}
