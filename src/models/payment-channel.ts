import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The channel used to make a payment. `online:` transactions that took place online.
 *
 * `in store:` transactions that were made at a physical location.
 *
 * `other:` transactions that relate to banks, e.g. fees or deposits.
 *
 * This field replaces the `transaction_type` field.
 */
export const PaymentChannel = {
  Online: "online",
  InStore: "in store",
  Other: "other",
} as const;
export type PaymentChannel = (typeof PaymentChannel)[keyof typeof PaymentChannel] | (string & {});

export const paymentChannelSchema: EnumSchema<PaymentChannel> = s.enumOf<PaymentChannel>(PaymentChannel);
