import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditEmploymentVerificationSchema,
  type CreditEmploymentVerification,
} from "./credit-employment-verification.js";

export type CreditEmploymentItem = {
  itemId: string;
  employments: CreditEmploymentVerification[];
  employmentReportToken?: string;
};

export const creditEmploymentItemSchema: Schema<CreditEmploymentItem> = s.object<CreditEmploymentItem>({
  itemId: s.string(),
  employments: s.array(s.lazy(() => creditEmploymentVerificationSchema)),
  employmentReportToken: s.optional(s.string()),
  _keysMap: {
    itemId: "item_id",
    employmentReportToken: "employment_report_token",
  },
});
