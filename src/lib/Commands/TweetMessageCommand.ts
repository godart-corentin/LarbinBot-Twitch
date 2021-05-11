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
    twitchService.Tweet(this.FormatMessage(message));
  }

  private FormatMessage(inputMessage: string): string {
    let outputMessage = `${inputMessage.replace(
      "!tweet ",
      ""
    )}\r\n\r\nÇa se passe ici: ▶ twitch.tv/${this._channel} twitch.tv/${
      this._channel
    }`;

    if (this._tags.length > 0) {
      inputMessage += `\r\n\r\n${this._tags.join(" ")}`;
    }

    return outputMessage;
  }
}
