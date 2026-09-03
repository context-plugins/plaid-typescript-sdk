import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportPdfGetRequestOptions = {
  daysToInclude?: number | null;
};

export const assetReportPdfGetRequestOptionsSchema: Schema<AssetReportPdfGetRequestOptions> =
  s.object<AssetReportPdfGetRequestOptions>({
    daysToInclude: s.optionalNullable(s.number()),
    _keysMap: {
      daysToInclude: "days_to_include",
    },
  });
