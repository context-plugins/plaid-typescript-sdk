import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Please use the `payment_channel` field, `transaction_type` will be deprecated in the future.
 *
 * `digital:` transactions that took place online.
 *
 * `place:` transactions that were made at a physical location.
 *
 * `special:` transactions that relate to banks, e.g. fees or deposits.
 *
 * `unresolved:` transactions that do not fit into the other three types.
 */
export const TransactionType = {
  Digital: "digital",
  Place: "place",
  Special: "special",
  Unresolved: "unresolved",
} as const;
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType] | (string & {});

export const transactionTypeSchema: EnumSchema<TransactionType> = s.enumOf<TransactionType>(TransactionType);
