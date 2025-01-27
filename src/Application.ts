/* istanbul ignore file */
import "reflect-metadata";
import { LarbinBot } from "./LarbinBot";
import { container } from "tsyringe";
import { LoggerService } from "./services/LoggerService";
import { Configuration } from "./Configuration";
import { TwitchService } from "./services/TwitchService";
import { YamlService } from "./services/YamlService";
import { CryptoService } from "./services/CryptoService";
import { TmiFactory } from "./factory/TmiFactory";
import { CacheService } from "./services/CacheService";
import { TwitFactory } from "./factory/TwitFactory";

/**
 * DI
 */
container
  .register("ILarbinBot", { useClass: LarbinBot })
  .register("ILoggerService", { useClass: LoggerService })
  // Services
  .register("ITwitchService", { useClass: TwitchService })
  // Factory
  .register("ITmiFactory", { useClass: TmiFactory })
  .register("ITwitFactory", { useClass: TwitFactory })
  // Configuration
  .register("IConfiguration", { useClass: Configuration })
  .register("ICacheService", { useClass: CacheService })
  .register("ICryptoService", { useClass: CryptoService })
  .register("IYamlService", { useClass: YamlService });

/**
 * APPLICATION
 */
container.resolve(LarbinBot).Run();
