import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies what type of [Reroute to
 * Credentials](https://plaid.com/docs/auth/coverage/flow-options/#removing-manual-verification-entry-points-with-reroute-to-credentials)
 * pane should be used in the Link session for the Same-Day Micro-deposits flow. Default behavior is
 * `OPTIONAL`.
 */
export const RerouteToCredentials = {
  Off: "OFF",
  Optional: "OPTIONAL",
  Forced: "FORCED",
} as const;
export type RerouteToCredentials =
  | (typeof RerouteToCredentials)[keyof typeof RerouteToCredentials]
  | (string & {});

export const rerouteToCredentialsSchema: EnumSchema<RerouteToCredentials> =
  s.enumOf<RerouteToCredentials>(RerouteToCredentials);
