import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConsentEventInitiator = {
  Plaid: "PLAID",
  DataProvider: "DATA_PROVIDER",
  Customer: "CUSTOMER",
  EndUser: "END_USER",
} as const;
export type ConsentEventInitiator =
  | (typeof ConsentEventInitiator)[keyof typeof ConsentEventInitiator]
  | (string & {});

export const consentEventInitiatorSchema: EnumSchema<ConsentEventInitiator> =
  s.enumOf<ConsentEventInitiator>(ConsentEventInitiator);
