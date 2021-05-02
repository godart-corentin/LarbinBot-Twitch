import { singleton } from "tsyringe";

/**
 * App Configuration
 */
export class AppConfiguration {
  public Debug: boolean;
  public ConfigurationPath: string;
  public ConfigurationFile: string;
}

/**
 * Twitch Configuration
 */
export class TwitchConfiguration {
  public Username: string;
  public Password: string;
  public Channel: string;
}

/**
 * Twitter Configuration
 */
export class TwitterConfiguration {
  public ConsumerKey: string;
  public ConsumerSecret: string;
  public AccessToken: string;
  public AccessTokenSecret: string;
}

/**
 * Provide Configuration
 */
export interface IConfiguration {
  App: AppConfiguration;
  Twitch: TwitchConfiguration;
  Twitter: TwitterConfiguration;
}

@singleton()
export class Configuration implements IConfiguration {
  public App: AppConfiguration;
  public Twitch: TwitchConfiguration;
  public Twitter: TwitterConfiguration;

  constructor() {
    // Application
    this.App = {
      Debug: process.env.DEBUG?.toLocaleLowerCase() == "true" ?? false,
      ConfigurationPath: (process.env.LARBIN_FILE as string) || __dirname,
      ConfigurationFile: "larbin.yml",
    };

    // Twitch
    this.Twitch = {
      Username: (process.env.LARBIN_TWITCH_USERNAME as string) || "",
      Password: (process.env.LARBIN_TWITCH_PASSWORD as string) || "",
      Channel: (process.env.LARBIN_TWITCH_CHANNEL as string) || "",
    };

    this.Twitter = {
      ConsumerKey: (process.env.LARBIN_TWITTER_CONSUMER_KEY as string) || "",
      ConsumerSecret:
        (process.env.LARBIN_TWITTER_CONSUMER_SECRET as string) || "",
      AccessToken: (process.env.LARBIN_TWITTER_ACCESS_TOKEN as string) || "",
      AccessTokenSecret:
        (process.env.LARBIN_TWITTER_ACCESS_TOKEN_SECRET as string) || "",
    };
  }
}
