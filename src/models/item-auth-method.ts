import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemAuthMethod = {
  InstantAuth: "INSTANT_AUTH",
  InstantMatch: "INSTANT_MATCH",
  AutomatedMicrodeposits: "AUTOMATED_MICRODEPOSITS",
  SameDayMicrodeposits: "SAME_DAY_MICRODEPOSITS",
  InstantMicrodeposits: "INSTANT_MICRODEPOSITS",
  DatabaseMatch: "DATABASE_MATCH",
  DatabaseInsights: "DATABASE_INSIGHTS",
  TransferMigrated: "TRANSFER_MIGRATED",
  InvestmentsFallback: "INVESTMENTS_FALLBACK",
} as const;
export type ItemAuthMethod = (typeof ItemAuthMethod)[keyof typeof ItemAuthMethod] | (string & {});

export const itemAuthMethodSchema: EnumSchema<ItemAuthMethod> = s.enumOf<ItemAuthMethod>(ItemAuthMethod);
