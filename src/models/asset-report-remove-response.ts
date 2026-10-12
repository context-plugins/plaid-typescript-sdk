import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** AssetReportRemoveResponse defines the response schema for `/asset_report/remove` */
export type AssetReportRemoveResponse = {
  /** `true` if the Asset Report was successfully removed. */
  removed: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
