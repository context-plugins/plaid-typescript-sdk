import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assetReportUserSchema, type AssetReportUser } from "./asset-report-user.js";

export type AssetReportRefreshRequestOptions = {
  clientReportId?: string | null;
  webhook?: string | null;
  user?: AssetReportUser;
};

export const assetReportRefreshRequestOptionsSchema: Schema<AssetReportRefreshRequestOptions> =
  s.object<AssetReportRefreshRequestOptions>({
    clientReportId: s.optionalNullable(s.string()),
    webhook: s.optionalNullable(s.string()),
    user: s.optional(s.lazy(() => assetReportUserSchema)),
    _keysMap: {
      clientReportId: "client_report_id",
    },
  });
