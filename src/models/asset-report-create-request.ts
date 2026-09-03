import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetReportCreateRequestOptionsSchema,
  type AssetReportCreateRequestOptions,
} from "./asset-report-create-request-options.js";

export type AssetReportCreateRequest = {
  clientId?: string;
  secret?: string;
  accessTokens?: string[];
  daysRequested: number;
  options?: AssetReportCreateRequestOptions;
};

export const assetReportCreateRequestSchema: Schema<AssetReportCreateRequest> =
  s.object<AssetReportCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    accessTokens: s.optional(s.array(s.string())),
    daysRequested: s.number(),
    options: s.optional(s.lazy(() => assetReportCreateRequestOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      accessTokens: "access_tokens",
      daysRequested: "days_requested",
    },
  });
