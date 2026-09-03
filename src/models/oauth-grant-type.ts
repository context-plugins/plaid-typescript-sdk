import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OAuthGrantType = {
  RefreshToken: "refresh_token",
  UrnIetfParamsOauthGrantTypeTokenExchange: "urn:ietf:params:oauth:grant-type:token-exchange",
  ClientCredentials: "client_credentials",
} as const;
export type OAuthGrantType = (typeof OAuthGrantType)[keyof typeof OAuthGrantType] | (string & {});

export const oAuthGrantTypeSchema: EnumSchema<OAuthGrantType> = s.enumOf<OAuthGrantType>(OAuthGrantType);
