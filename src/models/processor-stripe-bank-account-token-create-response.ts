import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProcessorStripeBankAccountTokenCreateResponse = {
  stripeBankAccountToken: string;
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
