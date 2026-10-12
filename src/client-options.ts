import type { OAuth2ClientCredentials, TokenProvider } from "./core/auth/credentials.js";
import type { OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";
import { ServerEnvironment } from "./servers.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly clientId?: TokenProvider | undefined;
  readonly secret?: TokenProvider | undefined;
  readonly plaidVersion?: TokenProvider | undefined;
  /** The Plaid API supports client credentials, authorization code, and custom delegation flows. */
  readonly oauth2?: OAuth2ClientCredentials | undefined;
  readonly oauth2Strategy?: OAuth2TokenStrategy<OAuth2ClientCredentials> | undefined;
};

type ServerOptions =
  | {
      readonly serverEnvironment?: typeof ServerEnvironment.Production;
      readonly serverOptions?: {
        /** Production */
        default?: {
          baseUrl?: string;
        };
        /** Production */
        accessTokenServer?: {
          baseUrl?: string;
        };
      };
    }
  | {
      readonly serverEnvironment: typeof ServerEnvironment.Environment2;
      readonly serverOptions?: {
        /** Production */
        default?: {
          baseUrl?: string;
        };
        /** Production */
        accessTokenServer?: {
          baseUrl?: string;
        };
      };
    };
