import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/originator/funding_account/create` */
export type TransferOriginatorFundingAccountCreateResponse = {
  /**
   * The id of the funding account to use, available in the Plaid Dashboard. This determines which
   * of your business checking accounts will be credited or debited.
   */
  fundingAccountId?: string;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
