import { BaseCommand, CommandPolicies } from ".";
import { TwitchService } from "../../services/TwitchService";

/**
 * Tweet Message Command
 */
export class TweetMessageCommand extends BaseCommand {
  private _tags: Array<string>;
  private _channel: string;

  constructor(
    trigger: string,
    policies: CommandPolicies,
    channel: string,
    tags: Array<string>
  ) {
    super(trigger, policies);
    this._channel = channel;
    this._tags = tags;
  }

  public Action(twitchService: TwitchService, message: string): void {
    const formattedMessage = `
      ${message.replace("!tweet ", "")}\r\n\r\n
      C'est ici: ▶ twitch.tv/${this._channel}\r\n\r\n
      ${this._tags.join(" ")}
    `;
    twitchService.Tweet(formattedMessage);
  }
}
