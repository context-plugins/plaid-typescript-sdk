import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * CreditBankIncomeWebhookUpdateResponse defines the response schema for
 * `/credit/bank_income/webhook/update`.
 */
export type CreditBankIncomeWebhookUpdateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const creditBankIncomeWebhookUpdateResponseSchema: Schema<CreditBankIncomeWebhookUpdateResponse> =
  s.object<CreditBankIncomeWebhookUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
