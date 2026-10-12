import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  craVerificationIncomeItemSchema,
  type CraVerificationIncomeItem,
} from "./cra-verification-income-item.js";
import {
  craVerificationIncomeStreamSchema,
  type CraVerificationIncomeStream,
} from "./cra-verification-income-stream.js";
import {
  craVerificationIncomeUserSummarySchema,
  type CraVerificationIncomeUserSummary,
} from "./cra-verification-income-user-summary.js";

/** An object representing an Income Report within the Home Lending Report. */
export type CraVerificationIncomeReport = {
  /** The time when the Home Lending Income Report was generated. */
  generatedTime: Date;
  /** The number of days requested by the customer for the Home Lending Income Report. */
  daysRequested: number;
  /** Aggregated summary of all income streams for this user. */
  userSummary: CraVerificationIncomeUserSummary | null;
  /** The list of income streams for this user. */
  incomeStreams: CraVerificationIncomeStream[];
  /** The list of Items in the report along with the associated metadata about the Item. */
  items: CraVerificationIncomeItem[];
};

export const craVerificationIncomeReportSchema: Schema<CraVerificationIncomeReport> =
  s.object<CraVerificationIncomeReport>({
    generatedTime: s.dateTime(),
    daysRequested: s.int(),
    userSummary: s.nullable(s.lazy(() => craVerificationIncomeUserSummarySchema)),
    incomeStreams: s.array(s.lazy(() => craVerificationIncomeStreamSchema)),
    items: s.array(s.lazy(() => craVerificationIncomeItemSchema)),
    _keysMap: {
      generatedTime: "generated_time",
      daysRequested: "days_requested",
      userSummary: "user_summary",
      incomeStreams: "income_streams",
    },
  });
