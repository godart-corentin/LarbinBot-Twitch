import { BaseCommand, CommandPolicies } from ".";
import { TwitchService } from "../../services/TwitchService";

/**
 * Tweet Message Command
 */
export class TweetMessageCommand extends BaseCommand {
  constructor(trigger: string, policies: CommandPolicies) {
    super(trigger, policies);
  }

  public Action(twitchService: TwitchService, message: string): void {
    twitchService.Tweet(message);
  }
}
