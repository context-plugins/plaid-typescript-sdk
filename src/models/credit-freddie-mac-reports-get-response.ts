import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditFreddieMacVerificationOfAssetsDealSchema,
  type CreditFreddieMacVerificationOfAssetsDeal,
} from "./credit-freddie-mac-verification-of-assets-deal.js";

export type CreditFreddieMacReportsGetResponse = {
  deal: CreditFreddieMacVerificationOfAssetsDeal;
  requestId: string;
  schemaVersion: number;
};

export const creditFreddieMacReportsGetResponseSchema: Schema<CreditFreddieMacReportsGetResponse> =
  s.object<CreditFreddieMacReportsGetResponse>({
    deal: creditFreddieMacVerificationOfAssetsDealSchema,
    requestId: s.string(),
    schemaVersion: s.number(),
    _keysMap: {
      deal: "DEAL",
      requestId: "request_id",
      schemaVersion: "SchemaVersion",
    },
  });
