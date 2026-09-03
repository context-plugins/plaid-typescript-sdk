import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportRemoveResponse = {
  removed: boolean;
  requestId: string;
};

export const assetReportRemoveResponseSchema: Schema<AssetReportRemoveResponse> =
  s.object<AssetReportRemoveResponse>({
    removed: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
