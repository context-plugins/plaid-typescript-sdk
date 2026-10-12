import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportFreddieSchema, type AssetReportFreddie } from "./asset-report-freddie.js";

/**
 * AssetReportFreddieGetResponse defines the response schema for
 * `/credit/asset_report/freddie_mac/get`
 */
export type AssetReportFreddieGetResponse = {
  /** An object representing an Asset Report with Freddie Mac schema. */
  deal: AssetReportFreddie;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** The Verification Of Assets (aka VOA or Freddie Mac Schema) schema version. */
  schemaVersion: number;
};

export const assetReportFreddieGetResponseSchema: Schema<AssetReportFreddieGetResponse> =
  s.object<AssetReportFreddieGetResponse>({
    deal: assetReportFreddieSchema,
    requestId: s.string(),
    schemaVersion: s.float64(),
    _keysMap: {
      deal: "DEAL",
      requestId: "request_id",
      schemaVersion: "SchemaVersion",
    },
  });
