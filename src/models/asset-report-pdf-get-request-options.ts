import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * An optional object to filter or add data to `/asset_report/get` results. If provided, must be
 * non-`null`.
 */
export type AssetReportPdfGetRequestOptions = {
  /** The maximum integer number of days of history to include in the Asset Report. */
  daysToInclude?: number | null;
};

export const assetReportPdfGetRequestOptionsSchema: Schema<AssetReportPdfGetRequestOptions> =
  s.object<AssetReportPdfGetRequestOptions>({
    daysToInclude: s.optionalNullable(s.int()),
    _keysMap: {
      daysToInclude: "days_to_include",
    },
  });
