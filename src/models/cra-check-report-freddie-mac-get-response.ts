import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportFreddieMacVerificationOfAssetsDealSchema,
  type CraCheckReportFreddieMacVerificationOfAssetsDeal,
} from "./cra-check-report-freddie-mac-verification-of-assets-deal.js";

/**
 * CraCheckReportFreddieMacGetResponse defines the response schema for
 * `/cra/check_report/freddie_mac/get`
 */
export type CraCheckReportFreddieMacGetResponse = {
  /** An object representing a Base Report with Freddie Mac schema. */
  deal: CraCheckReportFreddieMacVerificationOfAssetsDeal;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** The Verification Of Assets (VOA) schema version. */
  schemaVersion: number;
};

export const craCheckReportFreddieMacGetResponseSchema: Schema<CraCheckReportFreddieMacGetResponse> =
  s.object<CraCheckReportFreddieMacGetResponse>({
    deal: craCheckReportFreddieMacVerificationOfAssetsDealSchema,
    requestId: s.string(),
    schemaVersion: s.float64(),
    _keysMap: {
      deal: "DEAL",
      requestId: "request_id",
      schemaVersion: "SchemaVersion",
    },
  });
