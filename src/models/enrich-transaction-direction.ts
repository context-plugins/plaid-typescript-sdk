import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the transaction from the perspective of the account holder:
 *
 * `OUTFLOW` - Includes outgoing transfers, purchases, and fees. (Typically represented as a
 * negative value on checking accounts and debit cards and a positive value on credit cards.)
 *
 * `INFLOW` - Includes incoming transfers, refunds, and income. (Typically represented as a positive
 * value on checking accounts and debit cards and a negative value on credit cards.)
 */
export const EnrichTransactionDirection = {
  Inflow: "INFLOW",
  Outflow: "OUTFLOW",
} as const;
export type EnrichTransactionDirection =
  | (typeof EnrichTransactionDirection)[keyof typeof EnrichTransactionDirection]
  | (string & {});

export const enrichTransactionDirectionSchema: EnumSchema<EnrichTransactionDirection> =
  s.enumOf<EnrichTransactionDirection>(EnrichTransactionDirection);
