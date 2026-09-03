import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
