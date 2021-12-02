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
    const formattedMessage = this.FormatMessage(message)
    if(formattedMessage.length > 255) {
      twitchService.Write(`Le tweet est trop long ! (${formattedMessage.length}/255)`)
    } else {
      twitchService.Tweet(formattedMessage);
    }
  }

  private FormatMessage(inputMessage: string): string {
    let outputMessage = `${inputMessage.replace(
      "!tweet ",
      ""
    )}\r\n\r\nÇa se passe ici: ▶ twitch.tv/${this._channel}`;

    if (this._tags.length > 0) {
      outputMessage += `\r\n\r\n${this._tags.join(" ")}`;
    }

    return outputMessage;
  }
}
