import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreditBankIncomeWebhookUpdateResponse = {
  requestId: string;
};

export const creditBankIncomeWebhookUpdateResponseSchema: Schema<CreditBankIncomeWebhookUpdateResponse> =
  s.object<CreditBankIncomeWebhookUpdateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
