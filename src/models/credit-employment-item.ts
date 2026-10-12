import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditEmploymentVerificationSchema,
  type CreditEmploymentVerification,
} from "./credit-employment-verification.js";

/** The object containing employment items. */
export type CreditEmploymentItem = {
  /** The `item_id` of the Item associated with this webhook, warning, or error */
  itemId: string;
  employments: CreditEmploymentVerification[];
  /** Token to represent the underlying Employment data */
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
