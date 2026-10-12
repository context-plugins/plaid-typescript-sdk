import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The channel used to make a payment. `online:` transactions that took place online.
 *
 * `in store:` transactions that were made at a physical location.
 *
 * `other:` transactions that relate to banks, e.g. fees or deposits.
 */
export const TransactionPaymentChannel = {
  Online: "online",
  InStore: "in store",
  Other: "other",
} as const;
export type TransactionPaymentChannel =
  | (typeof TransactionPaymentChannel)[keyof typeof TransactionPaymentChannel]
  | (string & {});

export const transactionPaymentChannelSchema: EnumSchema<TransactionPaymentChannel> =
  s.enumOf<TransactionPaymentChannel>(TransactionPaymentChannel);
