import { SkillBuilders } from 'ask-sdk';
import { AmazonCancelIntentHandler } from './handlers/amazon-cancel.handler';
import { AmazonStopIntentHandler } from './handlers/amazon-stop.handler';
import { LaunchRequestHandler } from './handlers/launch-request.handler';
import { SessionEndedHandler } from './handlers/session-end.handler';
import { CustomErrorHandler } from './handlers/custom-error.handler';
import { AmazonNavigateHomeIntentHandler } from './handlers/amazon-navigateHome.handler';
import { AmazonHelpIntentHandler } from './handlers/amazon-help.handler';
import { LambdaHandler } from 'ask-sdk-core/dist/skill/factory/BaseSkillFactory';
import { InsultsIntentHandler } from './handlers/insults.handler';

const buildLambdaSkill = (): LambdaHandler => {
  return SkillBuilders.custom()
    .addRequestHandlers(
      new AmazonCancelIntentHandler(),
      new AmazonStopIntentHandler(),
      new AmazonHelpIntentHandler(),
      new AmazonNavigateHomeIntentHandler(),
      new LaunchRequestHandler(),
      new SessionEndedHandler(),
      new InsultsIntentHandler()
    )
    .addErrorHandlers(new CustomErrorHandler())
    .lambda();
}

export let handler = buildLambdaSkill();
