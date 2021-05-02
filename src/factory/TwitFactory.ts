import Twit from "twit";
import { inject, injectable } from "tsyringe";

import { Configuration } from "../Configuration";

export interface ITwitFactory {
  Client: Twit;
}

@injectable()
export class TwitFactory implements ITwitFactory {
  private _client: Twit;

  constructor(@inject("IConfiguration") configuration: Configuration) {
    this._client = new Twit(TwitFactory.getOptions(configuration));
  }

  public get Client(): Twit {
    return this._client;
  }

  public static getOptions(configuration: Configuration): Twit.Options {
    return {
      consumer_key: configuration.Twitter.ConsumerKey,
      consumer_secret: configuration.Twitter.ConsumerSecret,
      access_token: configuration.Twitter.AccessToken,
      access_token_secret: configuration.Twitter.AccessTokenSecret,
      strictSSL: false,
      timeout_ms: 60 * 1000,
    } as Twit.Options;
  }
}
