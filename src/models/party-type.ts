import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PartyType = {
  DataAccessPlatform: "DATA_ACCESS_PLATFORM",
  DataProvider: "DATA_PROVIDER",
  DataRecipient: "DATA_RECIPIENT",
  Individual: "INDIVIDUAL",
  Merchant: "MERCHANT",
  Vendor: "VENDOR",
} as const;
export type PartyType = (typeof PartyType)[keyof typeof PartyType] | (string & {});

export const partyTypeSchema: EnumSchema<PartyType> = s.enumOf<PartyType>(PartyType);
