import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
