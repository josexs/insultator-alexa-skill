import { HandlerInput, RequestHandler } from 'ask-sdk';
import { Response } from 'ask-sdk-model'
import { messages } from '../messages';
import { Utils } from '../utils/utils';

export class InsultsIntentHandler implements RequestHandler {
    private utils = new Utils();

    public canHandle(handlerInput: HandlerInput): boolean {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'InsultsIntent';
    }

    public handle(handlerInput: HandlerInput): Response { //  Response | Promise<Response>
        console.log('Insults request init');
        const responseBuilder = handlerInput.responseBuilder;
        const numberInsult: number = this.utils.randomNumber(0, messages.insults.length - 1);
        const numberInsultRepeat: number = this.utils.randomNumber(0, messages.insultsRepeat.length - 1);
        return responseBuilder
            .speak(messages.insults[numberInsult])
            .reprompt(messages.insults[numberInsultRepeat])
            .withSimpleCard(messages.title, messages.insults[numberInsult])
            .getResponse();
    }
}
