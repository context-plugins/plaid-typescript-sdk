import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemRemoveReasonCode = {
  FraudFirstParty: "FRAUD_FIRST_PARTY",
  FraudFalseIdentity: "FRAUD_FALSE_IDENTITY",
  FraudAbuse: "FRAUD_ABUSE",
  FraudOther: "FRAUD_OTHER",
  ConnectionIsNonFunctional: "CONNECTION_IS_NON_FUNCTIONAL",
  Other: "OTHER",
} as const;
export type ItemRemoveReasonCode =
  | (typeof ItemRemoveReasonCode)[keyof typeof ItemRemoveReasonCode]
  | (string & {});

export const itemRemoveReasonCodeSchema: EnumSchema<ItemRemoveReasonCode> =
  s.enumOf<ItemRemoveReasonCode>(ItemRemoveReasonCode);
