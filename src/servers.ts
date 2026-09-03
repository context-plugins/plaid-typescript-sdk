import type { UrlTemplate } from "./core/api-request.js";
import { SdkError } from "./core/errors.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type DefaultServerOptions = {
  production?: { baseUrl?: string };
  environment2?: { baseUrl?: string };
};

export type AccessTokenServerServerOptions = {
  production?: { baseUrl?: string };
  environment2?: { baseUrl?: string };
};

export type ServerOptions = {
  default?: DefaultServerOptions;
  accessTokenServer?: AccessTokenServerServerOptions;
};

export type Servers = {
  default: (subPath: string) => UrlTemplate;
  accessTokenServer: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  default: {
    production: { baseUrl: "https://production.plaid.com" },
    environment2: { baseUrl: "https://sandbox.plaid.com" },
  },
  accessTokenServer: {
    production: { baseUrl: "https://api.plaid.com/oauth2/apiv2" },
    environment2: { baseUrl: "https://api.plaid.com/oauth2/apiv2" },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    default: (s) => defaultServer(environment, s, options.default),
    accessTokenServer: (s) => accessTokenServerServer(environment, s, options.accessTokenServer),
  };
}

function defaultServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DefaultServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Environment2: {
      const environment2 = { ...DEFAULT_SERVER_OPTIONS.default.environment2, ...options?.environment2 };
      return { baseUrl: environment2.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function accessTokenServerServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: AccessTokenServerServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.accessTokenServer.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Environment2: {
      const environment2 = {
        ...DEFAULT_SERVER_OPTIONS.accessTokenServer.environment2,
        ...options?.environment2,
      };
      return { baseUrl: environment2.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
