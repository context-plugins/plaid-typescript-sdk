import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationInsightsSchema, type VerificationInsights } from "./verification-insights.js";

export type AuthVerifyResponse = {
  requestId: string;
  itemId?: string | null;
  verificationStatus: string;
  verificationInsights: VerificationInsights;
};

export const authVerifyResponseSchema: Schema<AuthVerifyResponse> = s.object<AuthVerifyResponse>({
  requestId: s.string(),
  itemId: s.optionalNullable(s.string()),
  verificationStatus: s.string(),
  verificationInsights: verificationInsightsSchema,
  _keysMap: {
    requestId: "request_id",
    itemId: "item_id",
    verificationStatus: "verification_status",
    verificationInsights: "verification_insights",
  },
});
