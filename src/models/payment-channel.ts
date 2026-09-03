import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentChannel = {
  Online: "online",
  InStore: "in store",
  Other: "other",
} as const;
export type PaymentChannel = (typeof PaymentChannel)[keyof typeof PaymentChannel] | (string & {});

export const paymentChannelSchema: EnumSchema<PaymentChannel> = s.enumOf<PaymentChannel>(PaymentChannel);
