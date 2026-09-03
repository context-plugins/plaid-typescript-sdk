import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OAuthSubjectTokenType = {
  UrnPlaidParamsTokensUser: "urn:plaid:params:tokens:user",
  UrnPlaidParamsOauthUserToken: "urn:plaid:params:oauth:user-token",
  UrnPlaidParamsCreditMultiUser: "urn:plaid:params:credit:multi-user",
} as const;
export type OAuthSubjectTokenType =
  | (typeof OAuthSubjectTokenType)[keyof typeof OAuthSubjectTokenType]
  | (string & {});

export const oAuthSubjectTokenTypeSchema: EnumSchema<OAuthSubjectTokenType> =
  s.enumOf<OAuthSubjectTokenType>(OAuthSubjectTokenType);
