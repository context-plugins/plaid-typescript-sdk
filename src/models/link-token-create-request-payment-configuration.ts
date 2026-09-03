import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkTokenCreateRequestPaymentConfiguration = {
  amount: string;
  description?: string;
};

export const linkTokenCreateRequestPaymentConfigurationSchema: Schema<LinkTokenCreateRequestPaymentConfiguration> =
  s.object<LinkTokenCreateRequestPaymentConfiguration>({
    amount: s.string(),
    description: s.optional(s.string()),
  });
