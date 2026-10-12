import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProcessorStripeBankAccountTokenCreateResponse defines the response schema for
 * `/processor/stripe/bank_account_token/create`
 */
export type ProcessorStripeBankAccountTokenCreateResponse = {
  /** A token that can be sent to Stripe for use in making API calls to Plaid */
  stripeBankAccountToken: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const processorStripeBankAccountTokenCreateResponseSchema: Schema<ProcessorStripeBankAccountTokenCreateResponse> =
  s.object<ProcessorStripeBankAccountTokenCreateResponse>({
    stripeBankAccountToken: s.string(),
    requestId: s.string(),
    _keysMap: {
      stripeBankAccountToken: "stripe_bank_account_token",
      requestId: "request_id",
    },
  });
