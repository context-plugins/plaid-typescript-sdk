import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportAddOnsSchema, type AssetReportAddOns } from "./asset-report-add-ons.js";
import { assetReportUserSchema, type AssetReportUser } from "./asset-report-user.js";

export type AssetReportCreateRequestOptions = {
  clientReportId?: string | null;
  webhook?: string | null;
  includeFastReport?: boolean | null;
  products?: string[];
  addOns?: AssetReportAddOns[];
  user?: AssetReportUser;
  requireAllItems?: boolean | null;
};

export const assetReportCreateRequestOptionsSchema: Schema<AssetReportCreateRequestOptions> =
  s.object<AssetReportCreateRequestOptions>({
    clientReportId: s.optionalNullable(s.string()),
    webhook: s.optionalNullable(s.string()),
    includeFastReport: s.optionalNullable(s.boolean()),
    products: s.optional(s.array(s.string())),
    addOns: s.optional(s.array(s.lazy(() => assetReportAddOnsSchema))),
    user: s.optional(s.lazy(() => assetReportUserSchema)),
    requireAllItems: s.optionalNullable(s.boolean()),
    _keysMap: {
      clientReportId: "client_report_id",
      includeFastReport: "include_fast_report",
      addOns: "add_ons",
      requireAllItems: "require_all_items",
    },
  });
