import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferOriginatorFundingAccountCreateResponse = {
  fundingAccountId?: string;
  requestId: string;
};

export const transferOriginatorFundingAccountCreateResponseSchema: Schema<TransferOriginatorFundingAccountCreateResponse> =
  s.object<TransferOriginatorFundingAccountCreateResponse>({
    fundingAccountId: s.optional(s.string()),
    requestId: s.string(),
    _keysMap: {
      fundingAccountId: "funding_account_id",
      requestId: "request_id",
    },
  });
