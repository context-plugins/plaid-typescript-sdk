import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IdentityUpdateTypes = {
  Phones: "PHONES",
  Addresses: "ADDRESSES",
  Emails: "EMAILS",
  Names: "NAMES",
} as const;
export type IdentityUpdateTypes =
  | (typeof IdentityUpdateTypes)[keyof typeof IdentityUpdateTypes]
  | (string & {});

export const identityUpdateTypesSchema: EnumSchema<IdentityUpdateTypes> =
  s.enumOf<IdentityUpdateTypes>(IdentityUpdateTypes);
