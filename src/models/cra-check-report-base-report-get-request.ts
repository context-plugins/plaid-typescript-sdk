import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportPermissiblePurposeSchema,
  type CraCheckReportPermissiblePurpose,
} from "./cra-check-report-permissible-purpose.js";
import { craUserTierSchema, type CraUserTier } from "./cra-user-tier.js";

export type CraCheckReportBaseReportGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  thirdPartyUserToken?: string;
  itemIds?: string[] | null;
  userToken?: string;
  userTier?: CraUserTier | null;
  reportId?: string;
  consumerReportPermissiblePurpose?: CraCheckReportPermissiblePurpose;
};

export const craCheckReportBaseReportGetRequestSchema: Schema<CraCheckReportBaseReportGetRequest> =
  s.object<CraCheckReportBaseReportGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    itemIds: s.optionalNullable(s.array(s.string())),
    userToken: s.optional(s.string()),
    userTier: s.optionalNullable(s.lazy(() => craUserTierSchema)),
    reportId: s.optional(s.string()),
    consumerReportPermissiblePurpose: s.optional(s.lazy(() => craCheckReportPermissiblePurposeSchema)),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      itemIds: "item_ids",
      userToken: "user_token",
      userTier: "user_tier",
      reportId: "report_id",
      consumerReportPermissiblePurpose: "consumer_report_permissible_purpose",
    },
  });
