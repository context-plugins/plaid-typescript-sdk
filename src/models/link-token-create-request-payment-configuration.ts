import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Specifies options for initializing Link for use with the Pay By Bank flow. This is an optional
 * field to configure the user experience, and currently requires the amount field to be set.
 */
export type LinkTokenCreateRequestPaymentConfiguration = {
  /** The amount of the transfer (decimal string with two digits of precision e.g. "10.00"). */
  amount: string;
  /** The description of the transfer that provides the payment context. The max length is 256. */
  description?: string;
};

export const linkTokenCreateRequestPaymentConfigurationSchema: Schema<LinkTokenCreateRequestPaymentConfiguration> =
  s.object<LinkTokenCreateRequestPaymentConfiguration>({
    amount: s.string(),
    description: s.optional(s.string()),
  });
