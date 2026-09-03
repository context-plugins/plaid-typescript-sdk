import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craCheckReportLendScoreGetOptionsSchema,
  type CraCheckReportLendScoreGetOptions,
} from "./cra-check-report-lend-score-get-options.js";

export type CraCheckReportLendScoreGetRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  thirdPartyUserToken?: string;
  userToken?: string;
  options?: CraCheckReportLendScoreGetOptions | null;
};

export const craCheckReportLendScoreGetRequestSchema: Schema<CraCheckReportLendScoreGetRequest> =
  s.object<CraCheckReportLendScoreGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    thirdPartyUserToken: s.optional(s.string()),
    userToken: s.optional(s.string()),
    options: s.optionalNullable(s.lazy(() => craCheckReportLendScoreGetOptionsSchema)),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      thirdPartyUserToken: "third_party_user_token",
      userToken: "user_token",
    },
  });
