import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacVerificationOfAssetsDealSchema,
  type CreditFreddieMacVerificationOfAssetsDeal,
} from "./credit-freddie-mac-verification-of-assets-deal.js";

/**
 * CreditFreddieMacReportsGetResponse defines the response schema for
 * `/credit/freddie_mac/reports/get`
 */
export type CreditFreddieMacReportsGetResponse = {
  /** An object representing an Asset Report with Freddie Mac schema. */
  deal: CreditFreddieMacVerificationOfAssetsDeal;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** The Verification Of Assets (VOA) schema version. */
  schemaVersion: number;
};

export const creditFreddieMacReportsGetResponseSchema: Schema<CreditFreddieMacReportsGetResponse> =
  s.object<CreditFreddieMacReportsGetResponse>({
    deal: creditFreddieMacVerificationOfAssetsDealSchema,
    requestId: s.string(),
    schemaVersion: s.float64(),
    _keysMap: {
      deal: "DEAL",
      requestId: "request_id",
      schemaVersion: "SchemaVersion",
    },
  });
