import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportFreddieMacVerificationOfAssetsDealSchema,
  type CraCheckReportFreddieMacVerificationOfAssetsDeal,
} from "./cra-check-report-freddie-mac-verification-of-assets-deal.js";

export type CraCheckReportFreddieMacGetResponse = {
  deal: CraCheckReportFreddieMacVerificationOfAssetsDeal;
  requestId: string;
  schemaVersion: number;
};

export const craCheckReportFreddieMacGetResponseSchema: Schema<CraCheckReportFreddieMacGetResponse> =
  s.object<CraCheckReportFreddieMacGetResponse>({
    deal: craCheckReportFreddieMacVerificationOfAssetsDealSchema,
    requestId: s.string(),
    schemaVersion: s.number(),
    _keysMap: {
      deal: "DEAL",
      requestId: "request_id",
      schemaVersion: "SchemaVersion",
    },
  });
