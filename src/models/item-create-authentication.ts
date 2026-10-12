import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the entity authenticating the user. */
export const ItemCreateAuthentication = {
  Unknown: "UNKNOWN",
  DataPartner: "DATA_PARTNER",
  Plaid: "PLAID",
} as const;
export type ItemCreateAuthentication =
  | (typeof ItemCreateAuthentication)[keyof typeof ItemCreateAuthentication]
  | (string & {});

export const itemCreateAuthenticationSchema: EnumSchema<ItemCreateAuthentication> =
  s.enumOf<ItemCreateAuthentication>(ItemCreateAuthentication);
