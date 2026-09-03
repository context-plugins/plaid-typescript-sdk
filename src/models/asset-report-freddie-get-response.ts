import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportFreddieSchema, type AssetReportFreddie } from "./asset-report-freddie.js";

export type AssetReportFreddieGetResponse = {
  deal: AssetReportFreddie;
  requestId: string;
  schemaVersion: number;
};

export const assetReportFreddieGetResponseSchema: Schema<AssetReportFreddieGetResponse> =
  s.object<AssetReportFreddieGetResponse>({
    deal: assetReportFreddieSchema,
    requestId: s.string(),
    schemaVersion: s.number(),
    _keysMap: {
      deal: "DEAL",
      requestId: "request_id",
      schemaVersion: "SchemaVersion",
    },
  });
