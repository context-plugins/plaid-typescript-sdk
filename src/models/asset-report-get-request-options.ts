import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssetReportGetRequestOptions = {
  daysToInclude?: number | null;
};

export const assetReportGetRequestOptionsSchema: Schema<AssetReportGetRequestOptions> =
  s.object<AssetReportGetRequestOptions>({
    daysToInclude: s.optionalNullable(s.number()),
    _keysMap: {
      daysToInclude: "days_to_include",
    },
  });
